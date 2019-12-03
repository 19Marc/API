import 'dotenv/config';
import {ConfigService, } from './config/config.service';
import { NestFactory} from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });
  const configService = app.get<ConfigService>(ConfigService);
  
  console.log("SERRRVICCEE",  configService.get('DATABASE_PORT'));
  
  const port = await configService.get('DATABASE_PORT');
  console.log("POOOORTTT: ", port);
  await app.listen(port);
  Logger.log(`Server started running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
