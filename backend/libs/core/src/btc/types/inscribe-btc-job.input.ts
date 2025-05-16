import { IsNotEmpty, IsObject, IsString, IsUUID } from 'class-validator';
import { UnisatOrder } from './unisatOrder';

export enum InscribeBTCJobSteps {
  Initial = 'CREATE_UNISAT_ORDER',
  Second = 'PAY_UNISAT_ORDER',
  Third = 'CHECK_UNISAT_ORDER_AND_GET_INSCRIPTION_ID',
  Fourth = 'SAVE_INSCRIBE_BTC_DATA',
  Complete = 'COMPLETE',
}

export class CreateUnisatOrderJobInput {
  inscriptionContent: any;
  receiveAddress: string;
  payerPrivateKeyEnvVarName: string;
}

export class PayUnisatOrderJobInput {
  @IsNotEmpty({ message: 'jsonData field is required' })
  @IsObject({ message: 'jsonData field is not an object' })
  order: UnisatOrder;

  @IsNotEmpty({ message: 'payerPrivateKeyEnvVarName field is required' })
  payerPrivateKeyEnvVarName: string;
}
export class CheckUnisatOrderAndGetInscriptionIdJobInput {
  @IsNotEmpty({ message: 'jsonData field is required' })
  @IsObject({ message: 'jsonData field is not an object' })
  order: UnisatOrder;

  @IsString({ message: 'tx field is required' })
  tx: string;
}

export class SaveInscribeBtcDataJobInput {
  @IsString({ message: 'tx field is required' })
  tx: string;

  @IsNotEmpty({ message: 'jsonData field is required' })
  @IsObject({ message: 'jsonData field is not an object' })
  order: UnisatOrder;

  @IsString({ message: 'inscriptionId field is required' })
  inscriptionId: string;

  @IsNotEmpty({ message: 'createTime field is required' })
  createTime: number;
}
export class InscribeBtcJobInput {
  stepData?:
    | CreateUnisatOrderJobInput
    | PayUnisatOrderJobInput
    | SaveInscribeBtcDataJobInput
    | CheckUnisatOrderAndGetInscriptionIdJobInput;

  step: InscribeBTCJobSteps;
}
