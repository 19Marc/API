import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, PrimaryColumn,ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { CustomerEntity } from '../../customers/entity/customer.entity';
import { EventEntity } from '../../events/entity/event.entity';

@Entity('project')
export class ProjectEntity {
  @PrimaryGeneratedColumn({
    // type: 'uuid',
    // name: 'user_id'
  })
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  filename: string;

  @Column()
  views: number;

  @ManyToOne(type => CustomerEntity, customer => customer.projects)
  @JoinColumn()
  customers: CustomerEntity[];

  @OneToMany(type => EventEntity, event => event.projects)
  events: EventEntity[];

  @Column()
  isPublished?: boolean;
}