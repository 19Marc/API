import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { ProjectEntity } from './entity/project.entity';

@Injectable()
export class ProjectsService extends TypeOrmCrudService<ProjectEntity> {
  constructor(
    @InjectRepository(ProjectEntity) repo,
    // private readonly userRepository: Repository<UserEntity>
  ) {
    super(repo);
  }

  // findAll(): Promise<UserEntity[]> {
  //   return this.userRepository.find();
  // }
}