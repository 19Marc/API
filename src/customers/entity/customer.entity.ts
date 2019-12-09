import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany} from "typeorm";
import { ProjectEntity } from '../../projects/entity/project.entity';

@Entity('customer')
export class CustomerEntity {
  @PrimaryGeneratedColumn({
    // type: 'uuid',
    // name: 'customer_id'
  })
  id: number;

  @Column()
  name: string;

  @Column()
  color: string;

  @OneToMany(type => ProjectEntity, project => project.customers)
  projects: ProjectEntity[];

  @Column()
  isPublished?: boolean;
}