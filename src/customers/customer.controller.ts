import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { CustomerEntity } from './entity/customer.entity';
import { CustomersService } from './customer.service';

@Crud({
  model: {
    type: CustomerEntity,
  },
  params: {
		id: {
			field: '_id',
			type: 'uuid',
			primary: true,
    },
  },
})
@Controller('customers')
export class CustomersController implements CrudController<CustomerEntity> {
  constructor(public service: CustomersService) {}

  get base(): CrudController<CustomerEntity> {
    return this;
  }
  // @Get()
  // findAll(): string {
  //   return 'This action returns all users';
  // }
}