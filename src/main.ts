import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  await app.listen(3000);
}

bootstrap();
