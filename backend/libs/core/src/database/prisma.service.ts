import { Inject, Injectable, OnModuleInit, Optional } from '@nestjs/common';
import { PrismaClient } from '@prisma-clients/main';
import { PrismaServiceOptions } from './interfaces';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(
    @Optional()
    @Inject('PRISMA_SERVICE_OPTIONS')
    private readonly prismaServiceOptions: PrismaServiceOptions = {},
  ) {
    super({
      ...prismaServiceOptions.prismaOptions,
      errorFormat: 'minimal',
    });
  }

  async onModuleInit() {
    if (this.prismaServiceOptions.explicitConnect) {
      await this.$connect();
    }
  }
}
