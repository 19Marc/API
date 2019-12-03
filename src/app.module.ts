import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
 
import { TypeOrmConfigService  } from './config/typeorm.config';
import { ConfigModule } from './config/config.module';
import { UserModule } from './users/user.module';
import { CustomerModule } from './customers/customer.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService
    }),
    UserModule,
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// test
