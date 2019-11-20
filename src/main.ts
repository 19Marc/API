import 'dotenv/config';
import { NestFactory} from '@nestjs/core';
import { AppModule } from './app.module';
<<<<<<< HEAD
import { Logger } from '@nestjs/common';

const port = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  Logger.log(`Server running on http://localhost:${port}`, 'Bootstrap')
=======

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3306);
>>>>>>> using old commit, add ormconfig, entitity file
}
bootstrap();
