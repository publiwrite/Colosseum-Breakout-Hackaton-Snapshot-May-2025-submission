import { NestFactory } from '@nestjs/core';
import { CheckoutModule } from './checkout.module';
import rawBodyMiddleware from './rawBody.middleware';

export async function startApp() {
  const app = await NestFactory.create(CheckoutModule);
  app.use(rawBodyMiddleware());
  await app.listen(4010);
}
