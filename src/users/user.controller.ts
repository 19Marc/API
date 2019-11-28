import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { UserEntity } from './entity/user.entity';
import { UsersService } from './user.service';

@Crud({
  model: {
    type: UserEntity,
  },
  params: {
		id: {
			field: '_id',
			type: 'uuid',
			primary: true,
    },
  },
})
@Controller('users')
export class UsersController implements CrudController<UserEntity> {
  constructor(public service: UsersService) {}

  get base(): CrudController<UserEntity> {
    return this;
  }
  // @Get()
  // findAll(): string {
  //   return 'This action returns all users';
  // }
}