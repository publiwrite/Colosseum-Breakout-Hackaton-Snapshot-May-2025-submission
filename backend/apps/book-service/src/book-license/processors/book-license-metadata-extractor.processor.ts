import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Injectable, Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { QueueNames } from '@lib/common/entities/queues';
import { BookLicenceMetadataExtractorJobInput } from './dto/book-licence-metadata-extractor-job.input';
import { PrismaService, S3Service } from '@libs/core';
import { ConfigService } from '@nestjs/config';
import { Readable } from 'stream';
import * as mammoth from 'mammoth';
import { get_encoding } from 'tiktoken';
import * as crypto from 'crypto';

@Injectable()
@Processor(QueueNames.BookLicenseMetadata)
export class BookLicenseMetadataExtractorProcessor extends WorkerHost {
  private readonly logger = new Logger(
    BookLicenseMetadataExtractorProcessor.name,
  );

  constructor(
    private readonly prisma: PrismaService,
    private readonly s3FileUploadService: S3Service,
    private readonly configService: ConfigService,
  ) {
    super();
  }

  async process(
    job: Job<BookLicenceMetadataExtractorJobInput, any, string>,
  ): Promise<any> {
    try {
      this.logger.debug(`Processing metadata extraction for job ${job.id}`);

      const license = await this.prisma.r_BookLicense.findUnique({
        where: {
          id: job.data.bookLicenseId,
        },
      });

      if (!license) {
        throw new Error(`License ${job.data.bookLicenseId} not found`);
      }

      const privateBucketName = this.configService.get('PRIVATE_ASSETS_BUCKET');

      const assetStream = await this.s3FileUploadService.getObjectStream(
        privateBucketName,
        license.manuscriptAssetKey,
      );

      const docType =
        license.manuscriptAssetKey.indexOf('.docx') > -1 ? 'docx' : 'pdf';
      console.log('docType', license.manuscriptAssetKey, docType);
      const metadata =
        docType === 'docx'
          ? await getDocsRawText(assetStream)
          : await getPdfMetadata(assetStream);
      const encoder = get_encoding('gpt2');
      const tokens = encoder.encode(metadata.text);

      const sha256Hash = crypto
        .createHash('sha256')
        .update(metadata.text)
        .digest('hex');

      this.logger.debug(`Completed metadata extraction for job ${job.id}`);

      return {
        bookLicenseId: job.data.bookLicenseId,
        hash: sha256Hash,
        pages: metadata.numPages,
        tokens: tokens.length,
      };
    } catch (error) {
      this.logger.error(
        `Error processing metadata extraction: ${error.message}`,
      );
      throw error;
    }
  }
}

async function getDocsRawText(
  stream: Readable,
): Promise<{ text: string; numPages: number }> {
  try {
    const chunks: Buffer[] = [];
    for await (const chunk of stream) {
      chunks.push(Buffer.from(chunk));
    }
    const buffer = Buffer.concat(chunks);
    const result = await mammoth.extractRawText({ buffer });

    return {
      text: result.value,
      numPages: 0,
    };
  } catch (error) {
    console.error('Error processing document:', error);
    throw error;
  }
}

async function getPdfMetadata(
  stream: Readable,
): Promise<{ text: string; numPages: number }> {
  const chunks: Buffer[] = [];
  for await (const chunk of stream) {
    chunks.push(Buffer.from(chunk));
  }
  const buffer = Buffer.concat(chunks);
  const uint8Array = new Uint8Array(buffer);

  try {
    const pdfjsLib = await (eval(
      `import('pdfjs-dist/legacy/build/pdf.mjs')`,
    ) as Promise<any>);

    const pdf = await pdfjsLib.getDocument(uint8Array).promise;

    let fullText = '';

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const pageText = content.items.map((item: any) => item.str).join(' ');
      fullText += pageText + '\n';
    }

    return {
      text: fullText,
      numPages: pdf.numPages,
    };
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    throw error;
  }
}
