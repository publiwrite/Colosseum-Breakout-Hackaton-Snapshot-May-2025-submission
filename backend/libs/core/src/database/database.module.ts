import { isLocalEnvironment } from '@lib/common';
import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PostgresDialect } from 'kysely';
import { KyselyModule } from 'nestjs-kysely';
import { Pool } from 'pg';
import {
  PrismaModuleAsyncOptions,
  PrismaModuleOptions,
  PrismaOptionsFactory,
} from './interfaces';
import { PRISMA_SERVICE_OPTIONS } from './prisma.constants';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    KyselyModule.forRootAsync({
      imports: [ConfigModule], // Ensure ConfigModule is imported
      namespace: 'postgres',
      useFactory: async (configService: ConfigService) => ({
        dialect: new PostgresDialect({
          pool: new Pool({
            database: configService.get<string>('DATABASE_NAME'),
            host: configService.get<string>('DATABASE_HOST'),
            password: configService.get<string>('DATABASE_PASSWORD'),
            user: configService.get<string>('DATABASE_USER'),
            port: configService.get<number>('DATABASE_PORT'),
            max: configService.get<number>('DATABASE_POOL_MAX'),
            ...(!isLocalEnvironment(process.env.NODE_ENV) && {
              ssl: { rejectUnauthorized: false },
            }),
          }),
        }),
        ...(isLocalEnvironment(process.env.NODE_ENV) && {
          log(event) {
            if (event.level === 'error') {
              console.error('Query failed : ', {
                durationMs: event.queryDurationMillis,
                error: event.error,
                sql: event.query.sql,
                //    params: event.query.parameters.map(maskPII),
              });
            } else {
              console.log('Query executed : ', {
                durationMs: event.queryDurationMillis,
                sql: event.query.sql,
                //    params: event.query.parameters.map(maskPII),
              });
            }
          },
        }),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    {
      provide: 'PRISMA_SERVICE_OPTIONS',
      useValue: PRISMA_SERVICE_OPTIONS,
    },
    PrismaService,
  ],
  exports: [PrismaService, 'PRISMA_SERVICE_OPTIONS'],
})
export class DatabaseModule {
  static forRoot(options: PrismaModuleOptions = {}): DynamicModule {
    return {
      global: options.isGlobal,
      module: DatabaseModule,
      providers: [
        {
          provide: PRISMA_SERVICE_OPTIONS,
          useValue: options.prismaServiceOptions,
        },
      ],
    };
  }

  static forRootAsync(options: PrismaModuleAsyncOptions): DynamicModule {
    return {
      global: options.isGlobal,
      module: DatabaseModule,
      imports: options.imports || [],
      providers: this.createAsyncProviders(options),
    };
  }

  private static createAsyncProviders(
    options: PrismaModuleAsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return this.createAsyncOptionsProvider(options);
    }

    return [
      ...this.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(
    options: PrismaModuleAsyncOptions,
  ): Provider[] {
    if (options.useFactory) {
      return [
        {
          provide: PRISMA_SERVICE_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
      ];
    }
    return [
      {
        provide: PRISMA_SERVICE_OPTIONS,
        useFactory: async (optionsFactory: PrismaOptionsFactory) =>
          await optionsFactory.createPrismaOptions(),
        inject: [options.useExisting || options.useClass],
      },
    ];
  }
}
