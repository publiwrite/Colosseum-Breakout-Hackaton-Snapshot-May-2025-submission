import { InjectQueue, Processor, WorkerHost } from '@nestjs/bullmq';
import { Injectable, Logger } from '@nestjs/common';
import { QueueNames } from '@lib/common/entities/queues';
import { GenerateLicenseCertificateJobInput } from './dto/generate-license-certificate-job.input';
import { PinataService, PrismaService, S3Service } from '@libs/core';
import { ConfigService } from '@nestjs/config';
import { R_TypeOfRights } from '@prisma-clients/main';
import * as PDFDocument from 'pdfkit';
import { PassThrough } from 'node:stream';
import { buffer } from 'stream/consumers';
import { buildBookLicenseCertificateKey } from '../book-license.utils';
import { Job, Queue } from 'bullmq';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
@Processor(QueueNames.GenerateBookLicenseCertificateQueue)
export class GenerateLicenseCertificateProcessor extends WorkerHost {
  private readonly logger = new Logger(
    GenerateLicenseCertificateProcessor.name,
  );

  constructor(
    private readonly prisma: PrismaService,
    private readonly s3FileUploadService: S3Service,
    private readonly configService: ConfigService,
    private readonly pinataService: PinataService,
    @InjectQueue(QueueNames.GenerateBookLicenseSolanaPNftQueue)
    private generateBookLicenseSolanaInscriptionQueue: Queue,
  ) {
    super();
  }

  async process(
    job: Job<GenerateLicenseCertificateJobInput, any, string>,
  ): Promise<any> {
    try {
      this.logger.debug(
        `Starting license certificate generation for job ${job.id}`,
      );

      const { bookLicenseOrderId } = job.data;

      const bookLicenseOrder = await this.prisma.r_BookLicenseOrder.findUnique({
        where: {
          id: bookLicenseOrderId,
        },
        include: {
          buyer: true,
          bookLicense: {
            include: {
              user: true,
              authors: true,
              metadata: true,
            },
          },
        },
      });

      console.log('>>>', bookLicenseOrder.bookLicense);

      const docStream = this.generateLicenseTemplatePDF({
        isCommercial: bookLicenseOrder.bookLicense.isForCommercialUse,
        isbn: bookLicenseOrder.bookLicense.isbn,
        LicenseeName: `${bookLicenseOrder.buyer.username}`,
        typeOfRights: bookLicenseOrder.bookLicense.typeOfRights,
        tokens: bookLicenseOrder.bookLicense.metadata.tokens,
        bookTitle: bookLicenseOrder.bookLicense.title,
        bookAuthorName: bookLicenseOrder.bookLicense?.authors[0]?.name,
        btcInscriptionId: bookLicenseOrder.bookLicense.btcInscriptionId,
        manuscriptHash: bookLicenseOrder.bookLicense.metadata.hash,
      });

      const pdfBuffer = await buffer(docStream);

      const Bucket = this.configService.get('PRIVATE_ASSETS_BUCKET');

      const signedTemplateAssetKey =
        buildBookLicenseCertificateKey(bookLicenseOrderId);

      await this.s3FileUploadService.putObject({
        Body: pdfBuffer,
        Bucket,
        Key: signedTemplateAssetKey,
        ACL: 'private',
        ContentDisposition: 'inline',
      });

      // https://aquamarine-secret-cricket-770.mypinata.cloud/ipfs/bafkreiae75lnisj7cj4kzpozchn6mvforxk4jkzn5l6txeiipov6y3vvci
      const signedTemplateIpfsCid = await this.uploadPdfWithPinata(
        uuidV4(),
        pdfBuffer,
      );

      await job.log(
        `Generate cid ${signedTemplateIpfsCid} for signed template asset key`,
      );

      await this.prisma.r_BookLicenseOrder.update({
        where: {
          id: bookLicenseOrderId,
        },
        data: {
          signedTemplateAssetKey,
          signedTemplateIpfsCid,
        },
      });

      await this.generateBookLicenseSolanaInscriptionQueue.add(
        `Generate solana inscription for book license order id  ${bookLicenseOrderId}`,
        {
          bookLicenseOrderId,
        },
      );

      this.logger.debug(
        `Completed license certificate generation for job ${job.id}`,
      );

      return {
        success: true,
      };
    } catch (error) {
      this.logger.error(
        `Error generating license certificate: ${error.message}`,
      );
      throw error;
    }
  }

  async uploadPdfWithPinata(name: string, pdfBuffer: Buffer): Promise<string> {
    const file = new File([pdfBuffer], `${name}.pdf`, {
      type: 'application/pdf',
    });

    return await this.pinataService.uploadFile(file);
  }

  generateLicenseTemplatePDF({
    isCommercial,
    typeOfRights,
    tokens,
    bookAuthorName,
    bookTitle,
    isbn,
    btcInscriptionId,
    manuscriptHash,
    LicenseeName,
  }: {
    isCommercial: boolean;
    typeOfRights?: R_TypeOfRights;
    tokens: number;
    bookAuthorName: string;
    bookTitle: string;
    isbn?: string;
    btcInscriptionId?: string;
    manuscriptHash?: string;
    LicenseeName?: string;
  }) {
    const doc = new PDFDocument({
      size: 'A4',
      margins: { top: 50, bottom: 50, left: 50, right: 50 },
    });
    const stream = new PassThrough();
    doc.pipe(stream);
    // HELPER FUNCTIONS
    function heading(text: string) {
      doc.moveDown(1);
      doc.font('Times-Bold').fontSize(14).text(text, {
        align: 'left',
      });
      doc.moveDown(0.5);
    }

    function subheading(text: string) {
      doc.font('Times-Bold').fontSize(12).text(text);
      doc.moveDown(0.2);
    }

    function paragraph(text: string) {
      doc.font('Times-Roman').fontSize(11).text(text, {
        align: 'justify',
        lineGap: 4,
      });
      doc.moveDown(0.5);
    }

    function bulletList(items) {
      items.forEach((item) => {
        doc
          .font('Times-Roman')
          .fontSize(11)
          .text(`•         ${item}`, { indent: 20, lineGap: 6 });
      });
      doc.moveDown(0.5);
    }

    function bulletListWithBold(items: { title: string; desc: string }[]) {
      items.forEach((item) => {
        doc.font('Times-Bold').fontSize(11).text(`•         ${item.title}`, {
          indent: 20,
          continued: true,
          lineGap: 6,
        });
        doc.font('Times-Roman').text(` ${item.desc}`);
      });
      doc.moveDown(0.5);
    }

    // TITLE
    doc
      .font('Times-Bold')
      .fontSize(18)
      .text('LICENSE AGREEMENT', { align: 'center' });
    doc.moveDown(1);

    // INTRO
    doc
      .font('Times-Bold')
      .fontSize(11)
      .text(
        'This Non-Exclusive Perpetual AI Training & Reference License Agreement (the "Agreement") ',
        {
          continued: true,
        },
      )
      .font('Times-Roman')
      .text(
        'is entered into electronically between the Licensor and Licensee upon completion of the digital form and, where applicable, payment of the License Fee.',
        {
          align: 'justify',
          lineGap: 4,
        },
      );

    // SECTION 1
    heading('1. Parties & Identification');

    subheading('1.1 Licensor:');
    bulletList([
      `Identifier: ${bookAuthorName}`,
      `Title of Work: ${bookTitle}`,
      ...(isbn ? [`ISBN: ${isbn}:`] : []),
      `Manuscript Hash: ${manuscriptHash}`,
      `BTC Inscription ID: ${btcInscriptionId}`,
      `Tokens: ${tokens}`,
    ]);

    subheading('1.2 Licensee:');
    bulletList([`Identifier: ${LicenseeName}`]);

    subheading('1.3 Platform:');
    paragraph(
      'Amaranthine Labs, registered in England and Wales (Company No. 14263174), acting solely as facilitator. The Platform has no liability for the validity or enforcement of this Agreement.',
    );

    // SECTION 2

    const rightsDefinitions = [];
    const trainingRightsDefinition = {
      title: '“Training Rights”:',
      desc: 'Licensee may ingest, tokenize, and train AI/ML models on the Work, provided models do not reproduce substantial verbatim content.',
    };
    const referenceRightsDefinition = {
      title: '“Reference Rights”:',
      desc: 'Licensee may enable AI models to externally reference the Work (quotations, summaries, analyses, translations, text-to-audio) within the limits specified in Section 4.',
    };
    if (typeOfRights === R_TypeOfRights.TRAINING_RIGHTS) {
      rightsDefinitions.push(trainingRightsDefinition);
    } else if (typeOfRights === R_TypeOfRights.REFERENCE_RIGHTS) {
      rightsDefinitions.push(referenceRightsDefinition);
    } else if (typeOfRights === R_TypeOfRights.BOTH) {
      rightsDefinitions.push(trainingRightsDefinition);
      rightsDefinitions.push(referenceRightsDefinition);
    }

    heading('2. Definitions');
    // Custom styled definitions list
    const definitions = [
      {
        title: '“Work”:',
        desc: 'The literary work identified by Licensor in Section 1.1, including text and embedded illustrations, protected by copyright.',
      },
      ...rightsDefinitions,
      {
        title: '“Internal Users”:',
        desc: 'Licensee’s employees, contractors, or affiliated students.',
      },
      {
        title: '“External Users”:',
        desc: 'Licensee’s customers or the general public.',
      },
      {
        title: '“Commercial Use”:',
        desc: 'Use of AI outputs in products or services that generate revenue.',
      },
      {
        title: '“Non-Commercial Use”:',
        desc: 'Personal, educational, or internal research use without direct monetization.',
      },
      {
        title: '“Effective Date”:',
        desc: 'The date on which the Licensor completes the form and Licensee’s payment is received.',
      },
    ];

    bulletListWithBold(definitions);

    // SECTION 3
    heading('3. Grant of License');
    subheading('3.1 Perpetual Term:');
    paragraph(
      'Licensor grants Licensee a non-exclusive, worldwide, perpetual license to use the Work as selected in the digital form, effective on the Effective Date.',
    );
    subheading('3.2 Rights Granted:');

    const rightsGranted = [];
    const trainingRights = {
      title: 'Training Rights',
      desc: 'Licensee may ingest and use the Work solely for training AI models.',
    };
    const referenceRights = {
      title: 'Reference Rights',
      desc: 'Licensee may store the Work externally and allow AI models to reference it for the sub-options chosen.',
    };

    if (typeOfRights === R_TypeOfRights.TRAINING_RIGHTS) {
      rightsGranted.push(trainingRights);
    } else if (typeOfRights === R_TypeOfRights.REFERENCE_RIGHTS) {
      rightsGranted.push(referenceRights);
    } else if (typeOfRights === R_TypeOfRights.BOTH) {
      rightsGranted.push(trainingRights);
      rightsGranted.push(referenceRights);
    }

    bulletListWithBold(rightsGranted);
    subheading('3.3 Scope of Users:');
    paragraph('The license covers both Internal and External Users.');
    subheading('3.4 Commercial Scope:');
    paragraph(
      `The license is limited to ${isCommercial ? 'Commercial' : 'Non-Commercial'} use (as chosen by the Licensor).`,
    );
    subheading('3.5 Reserved Rights:');
    paragraph(
      'All rights not expressly granted herein are reserved to the Licensor.',
    );

    // SECTION 4
    heading('4. Permitted Uses & Limits');

    const trainingRightsList = [
      'Licensee may preprocess, tokenize, and train models on the Work.',
      'Models must not generate verbatim text from the Work beyond de minimis fragments.',
    ];

    const referenceRightsList = [
      {
        title: 'Quotation:',
        desc: 'Up to 500 characters per excerpt.',
      },
      {
        title: 'Summary:',
        desc: 'Up to 1,000 words per summary.',
      },
      {
        title: 'Analysis:',
        desc: 'Factual Q&A based on the Work.',
      },
      {
        title: 'Translation:',
        desc: 'Up to 500 characters per translated excerpt.',
      },
      {
        title: 'Text-to-Audio:',
        desc: 'Up to 2 minutes per audio excerpt.',
      },
      {
        title: 'Attribution:',
        desc: 'Each excerpt or summary must be accompanied by "© [Author], [Title]".',
      },
    ];

    if (typeOfRights === R_TypeOfRights.TRAINING_RIGHTS) {
      subheading('4.1 Training Rights:');
      bulletList(trainingRightsList);
    } else if (typeOfRights === R_TypeOfRights.REFERENCE_RIGHTS) {
      subheading('4.1 Reference Rights:');
      bulletListWithBold(referenceRightsList);
    } else if (typeOfRights === R_TypeOfRights.BOTH) {
      subheading('4.1 Training Rights:');
      bulletList(trainingRightsList);

      subheading('4.2 Reference Rights:');
      bulletListWithBold(referenceRightsList);
    }

    // SECTION 5
    heading('5. Prohibitions & Restrictions');
    subheading('5.1 No Redistribution:');
    paragraph(
      'Licensee shall not redistribute, sublicense, or sell the Work or any substantial portion thereof.',
    );
    subheading('5.2 Technical Safeguards:');
    paragraph(
      'Licensee shall implement reasonable technical and administrative measures to enforce excerpt limits and prevent unauthorized reproduction.',
    );
    subheading('5.3  No Competing Products:');
    paragraph(
      'Licensee’s internal users shall not use the Work to create or train models that substitute for the original Work in a competing product.',
    );

    // SECTION 6
    heading('6. Fees, Payment & Marketplace');
    subheading('6.1 License Fee:');
    paragraph(
      'The fee set by Licensor, payable via the Platform prior to license activation.',
    );
    subheading('6.2 Instant Approval:');
    paragraph(
      'The license becomes effective immediately upon payment receipt; no further approval steps are required.',
    );
    subheading('6.3 Delisting:');
    paragraph(
      'The licensor or the licensee may request that the Work be removed from the Platform for verified infringement or misconduct. Removal prevents new licenses but does not revoke existing licenses.',
    );

    // SECTION 7
    heading('7. Representations & Warranties');
    subheading('7.1 Licensor:');
    paragraph(
      'Represents and warrants ownership or control of all rights necessary to grant this license and that the Work does not infringe third-party rights.',
    );
    subheading('7.2 Licensee:');
    paragraph(
      'Represents and warrants that it will use the Work only as permitted under this Agreement.',
    );
    subheading('7.3 Remedy for Misrepresentation:');

    doc
      .font('Times-Roman')
      .fontSize(11)
      .text(
        'If Licensor’s warranty in Section 7.1 is found untrue (i.e., the Work is stolen or encumbered), Licensee may terminate this Agreement upon written notice. Upon such termination,',
        {
          align: 'justify',
          lineGap: 4,
          continued: true,
        },
      )
      .font('Times-Bold')
      .text(' Licensor', {
        align: 'justify',
        lineGap: 4,
        continued: true,
      })
      .font('Times-Roman')
      .text(
        ' shall refund a pro-rata portion of all License Fees paid for the unused term.The ',
        {
          align: 'justify',
          lineGap: 4,
          continued: true,
        },
      )
      .font('Times-Bold')
      .text('Platform', {
        align: 'justify',
        lineGap: 4,
        continued: true,
      })
      .font('Times-Roman')
      .text(
        ' will facilitate the refund transaction but bears no liability beyond processing; the obligation to fund the refund rests solely with Licensor. Licensee’s indemnification obligations under Section 8 shall not apply to claims resulting directly from such misrepresentation.',
        {
          align: 'justify',
          lineGap: 4,
        },
      );
    doc.moveDown(0.5);

    // SECTION 8
    heading('8. Indemnification');
    subheading('8.1 Licensee Indemnity:');
    paragraph(
      'Licensee shall indemnify, defend, and hold harmless Licensor from any claims arising from Licensee’s use of the Work beyond the scope of this Agreement.',
    );
    subheading('8.2 Licensor Indemnity:');
    paragraph(
      'Licensor shall indemnify, defend, and hold harmless Licensee from any claims that the Work infringes third-party rights, provided Licensee’s use is within the granted scope.',
    );

    // SECTION 9
    heading('9. Limitation of Liability');
    paragraph(
      'Neither party shall be liable for indirect, special, or consequential damages. The aggregate liability of either party for direct damages under this Agreement shall not exceed the total license fees paid.',
    );

    // SECTION 10
    heading('10. Termination');
    subheading('10.1 Termination for Breach:');
    paragraph(
      'Either party may terminate this Agreement immediately upon written notice if the other party materially breaches any provision and fails to cure within 30 days of notice.',
    );
    subheading('10.2 Effect of Termination:');
    bulletList([
      'Cease all new use of the Work for training or reference, including any API calls or data pulls.',
      'Delete or destroy all raw copies of the Work from all storage, systems, and data stores.',
      'Revoke access to any external datastores or services providing quotations, summaries, or analyses of the Work.',
      'Stop deploying, updating, or distributing any downstream applications or models that rely on the Work.',
      'Provide Licensor with written certification of compliance with the above duties within 15 days of termination.',
    ]);
    subheading('10.3 Model Retention:');
    paragraph(
      'Licensee may retain trained model artifacts, provided they are not used to reproduce verbatim content from the Work beyond de minimis fragments. Continued use of models that generate substantial verbatim excerpts constitutes infringement.',
    );
    subheading('10.4 Survival:');
    paragraph(
      'Sections 5, 6.3, 7, 8, 9, 10.2, 10.3, 11, and 12 survive termination.',
    );

    // SECTION 11
    heading('11. Governing Law & Dispute Resolution');
    paragraph(
      'This Agreement shall be governed by the laws of England and Wales. Parties submit to the exclusive jurisdiction of the courts of London. Alternatively, disputes may be resolved by binding arbitration under the LCIA Rules in London.',
    );

    // SECTION 12
    heading('12. Miscellaneous');

    subheading('12.1 Entire Agreement:');
    paragraph(
      'This Agreement, including digital form data, constitutes the entire agreement between the parties.',
    );
    subheading('12.2 Amendments:');
    paragraph(
      'Any modifications must be made in writing and electronically accepted via the Platform.',
    );

    subheading('12.3 Assignment:');
    paragraph(
      'Neither party may assign or transfer this Agreement without the other’s written consent.',
    );

    subheading('12.4 Electronic Execution:');
    paragraph(
      'This Agreement is executed electronically. The Platform’s records of form completion and payment constitute conclusive evidence of the Agreement.',
    );

    // FINALIZE
    doc.end();

    return stream;
  }
}
