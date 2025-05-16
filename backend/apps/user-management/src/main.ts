import { OpenTelemetryFactory } from '@lib/common/open-telemetry';

async function bootstrap() {
  (await OpenTelemetryFactory('User Management Service')).start();

  const { startApp } = await import('./app');
  await startApp();
}
bootstrap();
