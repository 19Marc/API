import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, PrimaryColumn } from 'typeorm';
import { EventEntity } from '../../events/entity/event.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn({
    // type: 'uuid',
    // name: 'user_id'
  })
  id: number;

  @Column()
  surname: string;
  
  @Column()
  forname: string;

  @Column()
  mail: string;

  @Column()
  phone: number;

  @Column()
  filename: string;

  @ManyToMany(type => EventEntity, event => event.users)
  // @JoinTable({name : 'user_use_customer'})
  events: EventEntity[];

  @Column()
  isPublished?: boolean;
}