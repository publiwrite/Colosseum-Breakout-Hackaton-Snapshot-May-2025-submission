import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq';
import { Job, DelayedError } from 'bullmq';
import { v4 as uuidV4 } from 'uuid';
import {
  CheckUnisatOrderAndGetInscriptionIdJobInput,
  CreateUnisatOrderJobInput,
  InscribeBtcJobInput,
  PayUnisatOrderJobInput,
  SaveInscribeBtcDataJobInput,
  InscribeBTCJobSteps,
} from '@libs/core/btc';
import { validate } from 'class-validator';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { QueueNames } from '@lib/common/entities/queues';
import { BtcService, UnisatService } from '@libs/core';

@Processor(QueueNames.InscribeBtcQueue)
export class PublishingInscribeBtcQueueProcessor extends WorkerHost {
  private readonly logger = new Logger(
    PublishingInscribeBtcQueueProcessor.name,
  );

  constructor(
    private readonly btcService: BtcService,
    private readonly unisatService: UnisatService,
    private readonly configService: ConfigService,
  ) {
    super();
  }

  async process(
    job: Job<InscribeBtcJobInput, any, string>,
    token: string,
  ): Promise<any> {
    let step = job.data.step;

    if (['local', 'testnet'].includes(this.configService.get('BTC_NETWORK'))) {
      await new Promise((resolve) => setTimeout(resolve, 5000));

      return {
        inscriptionId: uuidV4(),
        createTime: Date.now(),
      };
    }

    while (step !== InscribeBTCJobSteps.Complete) {
      switch (step) {
        case InscribeBTCJobSteps.Initial: {
          const stepData = await this.getStepData<CreateUnisatOrderJobInput>(
            job.data.stepData,
            CreateUnisatOrderJobInput,
          );

          if (stepData) {
            await job.log(`Trying to create Unisat order`);

            const order = await this.unisatService.createOrder(
              JSON.stringify(stepData.inscriptionContent),
              stepData.receiveAddress,
            );
            await job.log(`Unisat order created: ${JSON.stringify(order)}`);

            await job.updateData({
              step: InscribeBTCJobSteps.Second,
              stepData: {
                order: order,
                payerPrivateKeyEnvVarName: stepData.payerPrivateKeyEnvVarName,
              } as PayUnisatOrderJobInput,
            });
            step = InscribeBTCJobSteps.Second;
          } else {
            throw new Error('Invalid step data');
          }
          break;
        }
        case InscribeBTCJobSteps.Second: {
          const stepData = await this.getStepData<PayUnisatOrderJobInput>(
            job.data.stepData,
            PayUnisatOrderJobInput,
          );

          if (stepData) {
            await job.log('Preparing to make BTC payment');

            const recommendedFees =
              await this.unisatService.getRecommendedFees();
            const tx = await this.btcService.sendBitcoin(
              stepData.payerPrivateKeyEnvVarName,
              stepData.order.payAddress,
              stepData.order.amount,
              recommendedFees.economyFee,
              100,
              job,
            );

            await job.log(`Transaction address for BTC payment: ${tx}`);

            await job.moveToDelayed(Date.now() + 10000, token);

            await job.updateData({
              step: InscribeBTCJobSteps.Third,
              stepData: {
                order: stepData.order,
                tx: tx,
              } as CheckUnisatOrderAndGetInscriptionIdJobInput,
            });
            throw new DelayedError();
          } else {
            throw new Error('Invalid step data');
          }
        }

        case InscribeBTCJobSteps.Third: {
          const stepData =
            await this.getStepData<CheckUnisatOrderAndGetInscriptionIdJobInput>(
              job.data.stepData,
              CheckUnisatOrderAndGetInscriptionIdJobInput,
            );
          if (stepData) {
            const { order } = stepData;
            const inscription = await this.unisatService.getInscription(
              order.orderId,
            );

            if (!inscription?.inscriptionId) {
              await job.log(
                `I could not find the inscriptionId for order ${order.orderId}; I will retry in 20 seconds, delaying the job.`,
              );
              await job.moveToDelayed(Date.now() + 20000, token);

              await job.updateData({
                step: InscribeBTCJobSteps.Third,
                stepData: job.data.stepData,
              });
              throw new DelayedError();
            }

            await job.updateData({
              step: InscribeBTCJobSteps.Fourth,
              stepData: {
                inscriptionId: inscription.inscriptionId,
                order: stepData.order,
                tx: stepData.tx,
                createTime: inscription.createTime,
              } as SaveInscribeBtcDataJobInput,
            });
          } else {
            throw new Error('Invalid step data');
          }
          step = InscribeBTCJobSteps.Fourth;

          break;
        }

        case InscribeBTCJobSteps.Fourth: {
          const stepData = await this.getStepData<SaveInscribeBtcDataJobInput>(
            job.data.stepData,
            SaveInscribeBtcDataJobInput,
          );

          if (stepData) {
            await job.log(
              `Finished inscription, inscriptionId: ${stepData.inscriptionId}`,
            );
            await job.updateData({
              step: InscribeBTCJobSteps.Complete,
            });

            return {
              inscriptionId: stepData.inscriptionId,
              createTime: stepData.createTime,
            };
          } else {
            throw new Error('Invalid step data');
          }

          return InscribeBTCJobSteps.Complete;
        }

        default: {
          throw new Error('invalid step');
        }
      }
    }

    return InscribeBTCJobSteps.Complete;
  }

  async getStepData<T>(
    stepData: any,
    classConstructor: ClassConstructor<any>,
  ): Promise<T | null> {
    const data = plainToInstance(classConstructor, stepData);
    const validationErrors = await validate(data);

    if (validationErrors.length > 0) {
      return null;
    }
    return data;
  }

  @OnWorkerEvent('completed')
  onCompleted() {
    this.logger.log('InscribeBtcQueueProcessor completed'); // do some stuff
  }
}
