import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import * as dotenv from 'dotenv';
import { INestApplication } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

dotenv.config();

async function bootstrap() {
  const APP_PORT = process.env.PORT ?? 3000;

  const app: INestApplication = await NestFactory.create<NestExpressApplication>(MainModule);
  await app.listen(APP_PORT);
}

bootstrap();
