import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { TestService } from './test/test.service';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, TestService],
})
export class AppModule {}
