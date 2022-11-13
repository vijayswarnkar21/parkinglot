import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`starting application at : 3000`)
  await app.listen(3000);
}
bootstrap();
