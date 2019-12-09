import { Repository, EntityRepository } from 'typeorm';
import { ProjectEntity } from './entity/project.entity';

@EntityRepository(ProjectEntity)
export class UserRepository extends Repository<ProjectEntity> {}