import {Controller, Get, Post, HttpCode, Header, Redirect, Query, Param, Body, Put, Delete, Req} from '@nestjs/common';
import { CreateUserDto /*UpdateUserDto, ListAllEntities*/ } from './dto/create-user.dto';
import { identifier } from '@babel/types';
import { UsersService } from './users.service';


@Controller('users')
export class UserController {
  constructor(private /*readonly, when i dont want to change it*/ usersService: UsersService) {}

  @Post('users')
  addUser(
    @Body('name') userName: string, 
    @Body('firstName') userFirstName: string, 
    @Body('age') userAge: number
    ) {
      const generatedId = this.usersService.insertUser(
        userName, 
        userFirstName, 
        userAge,
        );
      return {id: generatedId};
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return 'This action adds a new User';
  }
  
 

  @Get()
  findAll(/*@Query() query: ListAllEntities*/) {                                     //findAll(example name)
    return "This action returns all Users (limit: ${query.limit} items)";
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
  update(@Param('id') id: string, /*@Body() updateUserDto: UpdateUserDto*/) {
    return `This action updates a #${id} User`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} User`
  }
}


/**
 * Exapmples
 * 
 *  @Post()
  @Header('Cache-Control', '200')
  @HttpCode(204)
  createTest(): string{
    return 'This action adds a new User'
  }
 */