import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { EventEntity } from './entity/event.entity';

@Injectable()
export class EventsService extends TypeOrmCrudService<EventEntity> {
  constructor(
    @InjectRepository(EventEntity) repo,
    // private readonly userRepository: Repository<UserEntity>
  ) {
    super(repo);
  }

  // findAll(): Promise<UserEntity[]> {
  //   return this.userRepository.find();
  // }
}