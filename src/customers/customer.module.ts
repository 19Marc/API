import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerEntity } from './entity/customer.entity';
import { CustomersService } from './customer.service';
import { CustomersController } from './customer.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ CustomerEntity ])],
  controllers: [CustomersController],
  providers: [CustomersService],
  
})
export class CustomerModule {}