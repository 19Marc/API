import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UsersService extends TypeOrmCrudService<UserEntity> {
  constructor(
    @InjectRepository(UserEntity) repo,
    private readonly userRepository: Repository<UserEntity>
  ) {
    super(repo);
  }

  // findAll(): Promise<UserEntity[]> {
  //   return this.userRepository.find();
  // }
}