import { LoggerService, corsAllowedOrigins, getCorsOrigin } from '@lib/common';
import { PrismaClientExceptionFilter } from '@libs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { UserManagementModule } from './user-management.module';

export async function startApp() {
  const app = await NestFactory.create(UserManagementModule, {
    bufferLogs: true,
  });
  app.useGlobalPipes(new ValidationPipe());

  app.useLogger(app.get(LoggerService));

  app.useGlobalFilters(
    // Prisma Client Exception Filter for unhandled exceptions
    new PrismaClientExceptionFilter(),
  );

  app.enableCors({
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    origin: getCorsOrigin(process.env.NODE_ENV),
    allowedHeaders: corsAllowedOrigins,
  });

  app.use(cookieParser());
  await app.listen(4001);
}
