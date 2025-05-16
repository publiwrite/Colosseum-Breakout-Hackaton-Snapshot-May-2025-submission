import { corsAllowedOrigins, getCorsOrigin } from '@lib/common';
import { NestFactory } from '@nestjs/core';
import { BookServiceModule } from './book-service.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

export async function startApp() {
  const app = await NestFactory.create(BookServiceModule);

  app.enableCors({
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    origin: getCorsOrigin(process.env.NODE_ENV),
    allowedHeaders: corsAllowedOrigins,
  });
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(4009);
}
