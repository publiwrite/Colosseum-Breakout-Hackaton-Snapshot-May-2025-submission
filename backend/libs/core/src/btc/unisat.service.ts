import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { BtcService } from '../btc/btc.service';

// Official docs: https://open-api.unisat.io/swagger.html
@Injectable()
export class UnisatService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly btcService: BtcService,
  ) {}

  get ApiUrl(): string {
    return this.configService.get('UNISAT_API_URL');
  }

  get authorizationHeaders() {
    return {
      Authorization: `Bearer ${this.configService.get('UNISAT_API_KEY')}`,
    };
  }

  async getOrder(orderId: string): Promise<any> {
    const restURL = `${this.ApiUrl}/v2/inscribe/order/${orderId}`;
    const response = await this.httpService.axiosRef.get(restURL, {
      headers: this.authorizationHeaders,
    });
    return response.data;
  }

  async getRecommendedFees(): Promise<{
    fastestFee: number;
    halfHourFee: number;
    hourFee: number;
    economyFee: number;
    minimumFee: number;
    updateTime: number;
  }> {
    const restURL = `${this.ApiUrl}/v1/indexer/fees/recommended`;
    const response = await this.httpService.axiosRef.get(restURL, {
      headers: this.authorizationHeaders,
    });
    return response.data;
  }

  async getInscription(orderId: string): Promise<{
    inscriptionId: string;
    createTime: number;
  }> {
    const order = await this.getOrder(orderId);

    return {
      inscriptionId: order.data.files[0].inscriptionId,
      createTime: order.data.createTime,
    };
  }
  async createOrder(
    inscriptionText: string,
    receiveAddress: string,
    filename: string = 'item.filename',
  ): Promise<any> {
    const restURL = `${this.ApiUrl}/v2/inscribe/order/create`;
    const feeEstimate = await this.btcService.getFeeEstimate();

    const axiosResponse = await this.httpService.axiosRef.post(
      restURL,
      {
        receiveAddress,
        feeRate: feeEstimate['144'],
        outputValue: 546,
        files: [
          {
            dataURL: `data:text/plain;charset=utf-8;base64,${btoa(
              inscriptionText,
            )}`,
            filename,
          },
        ],
      },
      {
        headers: this.authorizationHeaders,
      },
    );
    return axiosResponse?.data?.data;
  }
}
