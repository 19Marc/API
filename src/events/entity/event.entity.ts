import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ProjectEntity } from 'src/projects/entity/project.entity';
import { UserEntity } from '../../users/entity/user.entity';

@Entity('event')
export class EventEntity {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  filename: string;

  @Column()
  views: number;

  @ManyToOne(type => ProjectEntity, project => project.events)
  @JoinColumn()
  projects: ProjectEntity[];

  @ManyToMany(type => UserEntity, user => user.events, {primary: true,})
  @JoinTable({name : 'user_use_events'})
  users: UserEntity[];

  @Column()
  isPublished?: boolean;
}