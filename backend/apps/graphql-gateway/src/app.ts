import { NestFactory } from '@nestjs/core';
import { GraphqlServerModule } from './graphql-server.module';
import * as cookieParser from 'cookie-parser';
import { corsAllowedOrigins, getCorsOrigin } from '@lib/common';

export async function startApp() {
  const app = await NestFactory.create(GraphqlServerModule, {
    bufferLogs: true,
  });

  app.enableCors({
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    origin: getCorsOrigin(process.env.NODE_ENV),
    allowedHeaders: corsAllowedOrigins,
  });

  app.use(cookieParser());
  await app.listen(4002);
}
