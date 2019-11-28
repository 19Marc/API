import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

 
import { UserModule } from './users/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


