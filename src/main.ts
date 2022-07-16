import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as morgan from 'morgan';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: 'http://d1ps7gv5qruzjl.cloudfront.net',
    credentials: true,
  });
  app.use(morgan('tiny'));
  await app.listen(8080);
}
bootstrap();
