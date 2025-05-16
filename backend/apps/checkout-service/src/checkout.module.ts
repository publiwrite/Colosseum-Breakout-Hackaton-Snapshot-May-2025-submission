import { Module } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { BookVaultModule, CoinMarketCapClientModule, CommonModule, getApolloDriverConfig, } from '@lib/common';
import { DatabaseModule, HealthcheckModule, } from '@libs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriverConfig } from '@nestjs/apollo';
import { BullModule } from '@nestjs/bullmq';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HelioModule } from './helio/helio.module';
import { SolanaNftModule } from './solana-nft/solana-nft.module';
import { OrderModule } from './order/order.module';
import { ShippingCalculatorModule } from './shipping-calculator/shipping-calculator.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CommonModule,
    DatabaseModule,
    HealthcheckModule,
    BookVaultModule,
    CoinMarketCapClientModule,
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        connection: {
          host: configService.get<string>('REDIS_HOST'),
          port: configService.get<number>('REDIS_PORT'),
        },
        defaultJobOptions: {
          attempts: 3,
          backoff: {
            type: 'exponential',
            delay: 3000,
          },
        },
      }),
      inject: [ConfigService],
    }),
    BullModule.registerQueue(),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>(
      getApolloDriverConfig(process.env.NODE_ENV),
    ),
    HelioModule,
    SolanaNftModule,
    OrderModule,
    ShippingCalculatorModule,
  ],
  controllers: [],
  providers: [
    CheckoutService,
  ],
  exports: [CheckoutService],
})
export class CheckoutModule {}
