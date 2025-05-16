import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PinataSDK } from 'pinata';

@Injectable()
export class PinataService {
  private readonly logger = new Logger(PinataService.name);

  private readonly pinata: PinataSDK;

  constructor(private readonly configService: ConfigService) {
    this.pinata = new PinataSDK({
      pinataJwt: this.configService.get<string>('PINATA_JWT'),
      pinataGateway: 'gateway.pinata.cloud',
    });
  }

  async uploadFile(file: File): Promise<string> {
    const { cid } = await this.pinata.upload.public.file(file);
    return cid;
  }

  async uploadFromUrl(url: string): Promise<string> {
    const { cid } = await this.pinata.upload.public.url(url);
    return cid;
  }

  async uploadJson(data: any): Promise<string> {
    const { cid } = await this.pinata.upload.public.json(data);
    return cid;
  }
}
