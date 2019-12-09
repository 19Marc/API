import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { ProjectEntity } from './entity/project.entity';
import { ProjectsService } from './project.service';

@Crud({
  model: {
    type: ProjectEntity,
  },
  params: {
		id: {
			field: '_id',
			type: 'uuid',
			primary: true,
    },
  },

})
@Controller('projects')
export class ProjectsController implements CrudController<ProjectEntity> {
  constructor(public service: ProjectsService) {}

  get base(): CrudController<ProjectEntity> {
    return this;
  }
}