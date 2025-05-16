import { OpenTelemetryFactory } from '@lib/common/open-telemetry';
async function bootstrap() {
  (await OpenTelemetryFactory('Checkout Service')).start();

  const { startApp } = await import('./app');
  await startApp();
}
bootstrap();
