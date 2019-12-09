import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, PrimaryColumn} from "typeorm";
import { UserEntity } from '../../users/entity/user.entity';

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
  description: string;

  @Column()
  filename: string;

  @Column()
  views: number;

  // @ManyToMany(type => UserEntity)
  // customers: CustomerEntity[];  
  @ManyToMany(type => UserEntity, user => user.customers, {primary: true,})
  @JoinTable({name : 'user_use_customer'})
  users: UserEntity[];

  // @Column()
  // isPublished?: boolean;
}