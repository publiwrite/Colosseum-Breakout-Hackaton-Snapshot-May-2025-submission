import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { PayLinkRequestBody } from './dto/paylink-request.dto';
import axiosRetry from 'axios-retry';

@Injectable()
export class HelioClient {
  private readonly logger = new Logger(HelioClient.name);

  private readonly axiosInstance: AxiosInstance;

  constructor(private readonly configService: ConfigService) {
    const apiToken = this.configService.get<string>('HELIO_SECRET_API_KEY');
    const apiUrl = this.configService.get<string>('HELIO_API_URL');

    this.axiosInstance = axios.create({
      baseURL: apiUrl,
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      params: {
        apiKey: this.configService.get<string>('HELIO_PUBLIC_API_KEY'),
      },
    });

    axiosRetry(this.axiosInstance, { retries: 3 });

    // **Request Interceptor**
    this.axiosInstance.interceptors.request.use(
      (config) => {
        this.logger.log({
          message: 'Sending request',
          method: config.method,
          url: config.url,
          headers: config.headers,
          data: config.data,
        });
        return config;
      },
      (error) => {
        this.logger.error({
          message: 'Request error',
          error: error.message,
          stack: error.stack,
        });
        return Promise.reject(error);
      },
    );

    // **Response Interceptor**
    this.axiosInstance.interceptors.response.use(
      (response) => {
        this.logger.log({
          message: 'Received response',
          method: response.config.method,
          url: response.config.url,
          status: response.status,
          data: response.data,
        });
        return response;
      },
      (error) => {
        if (axios.isAxiosError(error)) {
          this.logger.error({
            message: 'Axios error',
            method: error.config?.method,
            url: error.config?.url,
            status: error.response?.status || 'No status',
            data: error.response?.data || 'No response data',
            headers: error.response?.headers || 'No headers',
            stack: error.stack,
          });
        } else {
          this.logger.error({
            message: 'Unexpected error',
            error: error.message,
            stack: error.stack,
          });
        }
        return Promise.reject(error);
      },
    );
  }

  async createPayLink(body: PayLinkRequestBody): Promise<AxiosResponse<any>> {
    return this.axiosInstance.post('/paylink/create/api-key', body);
  }


  async createPaymentLinkWebHook(
    paylinkId: string,
    events: string[],
    targetUrl: string,
  ): Promise<AxiosResponse<any>> {
    return this.axiosInstance.post('/webhook/paylink/transaction', {
      paylinkId,
      targetUrl,
      events,
    });
  }

  deletePaymentLinkWebHook(webhookId: string): Promise<AxiosResponse<any>> {
    return axios.delete(
      `https://api.dev.hel.io/v1/webhook/paylink/transaction/${webhookId}`,
      {
        headers: {
          Authorization: `Bearer ${this.configService.get<string>(
            'HELIO_SECRET_API_KEY',
          )}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'cache-control': 'no-cache',
        },
        params: {
          apiKey: this.configService.get<string>('HELIO_PUBLIC_API_KEY'),
        },
      },
    );
  }
}
