import { Controller, Get } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('user')
export class UsersController {

  @Get()
  findAll(): string {
    return 'This action returns all users';
  }
}