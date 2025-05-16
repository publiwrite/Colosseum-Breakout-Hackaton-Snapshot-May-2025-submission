import {
  GraphQLDataSourceProcessOptions,
  IntrospectAndCompose,
  RemoteGraphQLDataSource,
} from '@apollo/gateway';
import { GraphQLDataSourceRequestKind } from '@apollo/gateway/dist/datasources/types';
import { CommonModule } from '@lib/common';
import { HealthcheckModule } from '@libs/core';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    GraphQLModule.forRootAsync<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        server: {},
        gateway: {
          buildService: ({ name, url }) => {
            return new RemoteGraphQLDataSource({
              url,
              didReceiveResponse({ response, context }): typeof response {
                const cookies = (response.http.headers as any)?.raw()[
                  'set-cookie'
                ] as string[] | null;

                if (cookies) {
                  context?.req.res.append('set-cookie', cookies);
                }

                return response;
              },
              willSendRequest(params: GraphQLDataSourceProcessOptions) {
                const { request, context, kind } = params;
                request.http.headers.set(
                  'authorization',
                  context.req?.headers?.authorization,
                );

                if (kind === GraphQLDataSourceRequestKind.INCOMING_OPERATION) {
                  const cookie =
                    params?.incomingRequestContext.request.http.headers.get(
                      'Cookie',
                    );
                  request.http.headers.set('Cookie', cookie);
                }
              },
            });
          },
          supergraphSdl: new IntrospectAndCompose({
            subgraphs: [
              {
                name: 'USER_MANAGEMENT',
                url: configService.get('USER_MANAGEMENT_URL'),
              },
              {
                name: 'BOOK',
                url: configService.get('BOOK_SERVICE_URL'),
              },
              {
                name: 'CHECKOUT',
                url: configService.get('CHECKOUT_SERVICE_URL'),
              },
            ],
          }),
        },
        playground: true,
      }),
    }),
    CommonModule,
    HealthcheckModule,
  ],
})
export class GraphqlServerModule {}
