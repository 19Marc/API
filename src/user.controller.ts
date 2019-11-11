import {Controller, Get, Post, HttpCode, Header, Redirect, Query, Param, Body, Put, Delete} from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { identifier } from '@babel/types';

@Controller('User')

export class UserController {
  @Post()
  async createSecond(@Body() createUserDto: CreateUserDto) {
    return 'This action adds a new User';
  }
  
  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(204)
  create(): string{
    return 'This action adds a new User'
  }

  @Get()
  findAll(): string {                                     //findAll(example name)
    return 'This action returns all User';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This actions returns a #${params.id} user`;
  }
  @Get(':id')
  findSecondOne(@Param('id') id): any {
    console.log(id);
    return `This actions returns a #${id} user`;
  }

  @Get()
  async findSecondAll(): Promise<any[]> {
    return [];
  }

  @Put(":id")
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} User`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} User`
  }
}