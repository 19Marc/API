import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { EventEntity } from './entity/event.entity';
import { EventsService } from './event.service';

@Crud({
  model: {
    type: EventEntity,
  },
  params: {
		id: {
			field: '_id',
			type: 'uuid',
			primary: true,
    },
  },

})
@Controller('events')
export class EventsController implements CrudController<EventEntity> {
  constructor(public service: EventsService) {}

  get base(): CrudController<EventEntity> {
    return this;
  }
}