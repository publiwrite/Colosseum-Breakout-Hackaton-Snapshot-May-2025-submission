export enum BookLicenseCreationSteps {
  Initial = 'INITIAL',
  MetadataGeneration = 'METADATA_GENERATION',
  BtcInscription = 'BTC_INSCRIPTION',
  Complete = 'COMPLETE',
}

export interface BookLicenseCreationJobInput {
  bookLicenseId: string;
  step: BookLicenseCreationSteps;
  stepData?: {
    metadataJobId?: string;
    inscriptionJobId?: string;
  };
}
