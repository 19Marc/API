import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProjectEntity } from './entity/project.entity';
import { ProjectsService } from './project.service';
import { ProjectsController } from './project.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ ProjectEntity ])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  
})
export class ProjectModule {}