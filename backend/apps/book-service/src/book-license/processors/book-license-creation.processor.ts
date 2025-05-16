import {
  InjectQueue,
  OnWorkerEvent,
  Processor,
  WorkerHost,
} from '@nestjs/bullmq';
import { Job, Queue, WaitingChildrenError, UnrecoverableError } from 'bullmq';
import { InscribeBtcJobInput, PrismaService } from '@libs/core';
import { QueueNames } from '@lib/common/entities/queues';
import {
  BookLicenseCreationJobInput,
  BookLicenseCreationSteps,
} from './dto/book-license-creation-job.input';
import { R_BtcInscriptionStatus } from '@prisma-clients/main';
import { InscribeBTCJobSteps } from '@libs/core/btc';
import { generateBookLicenseInscriptionContent } from '../book-license.utils';

@Processor(QueueNames.BookLicenseCreation)
export class BookLicenseCreationProcessor extends WorkerHost {
  constructor(
    private readonly prisma: PrismaService,
    @InjectQueue(QueueNames.BookLicenseMetadata)
    private metadataQueue: Queue,
    @InjectQueue(QueueNames.InscribeBtcQueue)
    private inscribeBtcQueue: Queue<InscribeBtcJobInput>,
  ) {
    super();
  }

  async process(
    job: Job<BookLicenseCreationJobInput>,
    token?: string,
  ): Promise<any> {
    let step = job.data.step;

    while (step !== BookLicenseCreationSteps.Complete) {
      job.log(`Processing step ${step} ${JSON.stringify(job.data)}`);
      switch (step) {
        case BookLicenseCreationSteps.Initial: {
          step = await this.initialStep(job);
          break;
        }
        case BookLicenseCreationSteps.MetadataGeneration: {
          step = await this.metadataGenerationStep(job, token);
          break;
        }
        case BookLicenseCreationSteps.BtcInscription: {
          step = await this.btcInscriptionStep(job, token);
          break;
        }
        default: {
          throw new Error('invalid step');
        }
      }
    }
  }

  private async initialStep(
    job: Job<BookLicenseCreationJobInput>,
  ): Promise<BookLicenseCreationSteps> {
    const license = await this.prisma.r_BookLicense.findUnique({
      where: { id: job.data.bookLicenseId },
    });

    if (!license) {
      throw new UnrecoverableError('License not found');
    }

    const metadataJob = await this.metadataQueue.add(
      `Generate metadata for license ${license.id}`,
      { bookLicenseId: license.id },
      {
        parent: {
          id: job.id,
          queue: job.queueQualifiedName,
        },
      },
    );

    await job.updateData({
      ...job.data,
      step: BookLicenseCreationSteps.MetadataGeneration,
      stepData: {
        metadataJobId: metadataJob.id,
      },
    });

    return BookLicenseCreationSteps.MetadataGeneration;
  }

  private async metadataGenerationStep(
    job: Job<BookLicenseCreationJobInput>,
    token?: string,
  ): Promise<BookLicenseCreationSteps> {
    const shouldWait = await job.moveToWaitingChildren(token);

    if (!shouldWait) {
      const license = await this.prisma.r_BookLicense.findUnique({
        where: { id: job.data.bookLicenseId },
        include: {
          authors: true,
          genres: true,
        },
      });

      if (!license) {
        throw new UnrecoverableError('License not found');
      }

      if (!job.data.stepData?.metadataJobId) {
        throw new Error('No metadata job id found');
      }

      const metadataJob = await Job.fromId(
        this.metadataQueue,
        job.data.stepData.metadataJobId,
      );

      if (!metadataJob.returnvalue) {
        throw new Error('No metadata generated');
      }

      // Store metadata
      await this.prisma.r_BookLicenseMetadata.create({
        data: {
          bookLicenseId: job.data.bookLicenseId,
          hash: metadataJob.returnvalue.hash,
          pages: metadataJob.returnvalue.pages,
          tokens: metadataJob.returnvalue.tokens,
        },
      });

      const inscriptionContent = generateBookLicenseInscriptionContent(
        license as any,
        metadataJob.returnvalue,
      );

      console.log({ inscriptionContent });

      const inscriptionJob = await this.inscribeBtcQueue.add(
        `Create BTC inscription for license ${license.id}`,
        {
          step: InscribeBTCJobSteps.Initial,
          stepData: {
            inscriptionContent,
            receiveAddress: 'bc1qfnln7x6aj7krn0flju9fa9nrqh0y37q568736u',
            payerPrivateKeyEnvVarName: 'BTC_WALLET_PRIVATE_KEY_2',
          },
        },
        {
          parent: {
            id: job.id,
            queue: job.queueQualifiedName,
          },
        },
      );

      await job.updateData({
        ...job.data,
        step: BookLicenseCreationSteps.BtcInscription,
        stepData: {
          inscriptionJobId: inscriptionJob.id,
        },
      });

      return BookLicenseCreationSteps.BtcInscription;
    } else {
      throw new WaitingChildrenError();
    }
  }

  private async btcInscriptionStep(
    job: Job<BookLicenseCreationJobInput>,
    token?: string,
  ): Promise<BookLicenseCreationSteps> {
    const shouldWait = await job.moveToWaitingChildren(token);

    if (!shouldWait) {
      if (!job.data.stepData?.inscriptionJobId) {
        throw new Error('No inscription job id found');
      }

      const inscriptionJob = await Job.fromId(
        this.inscribeBtcQueue,
        job.data.stepData.inscriptionJobId,
      );

      if (!inscriptionJob.returnvalue?.inscriptionId) {
        throw new Error('BTC inscription failed');
      }

      await this.prisma.r_BookLicense.update({
        where: { id: job.data.bookLicenseId },
        data: {
          btcInscriptionId: inscriptionJob.returnvalue.inscriptionId,
          btcInscriptionStatus: R_BtcInscriptionStatus.BTC_INSCRIPTION_CREATED,
        },
      });

      await job.updateData({
        ...job.data,
        step: BookLicenseCreationSteps.Complete,
      });
      return BookLicenseCreationSteps.Complete;
    } else {
      throw new WaitingChildrenError();
    }
  }

  @OnWorkerEvent('completed')
  onCompleted() {
    console.log('BookLicenseCreationProcessor completed');
  }
}
