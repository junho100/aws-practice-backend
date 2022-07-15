import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as morgan from 'morgan';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: 'crn-junho-static-web.s3-website.ap-northeast-2.amazonaws.com',
    credentials: true,
  });
  app.use(morgan('tiny'));
  await app.listen(80);
}
bootstrap();
