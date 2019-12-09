import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EventEntity } from './entity/event.entity';
import { EventsService } from './event.service';
import { EventsController } from './event.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ EventEntity ])],
  controllers: [EventsController],
  providers: [EventsService],
  
})
export class EventModule {}