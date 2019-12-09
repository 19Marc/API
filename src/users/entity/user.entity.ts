import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, PrimaryColumn } from 'typeorm';
import { CustomerEntity } from '../../customers/entity/customer.entity';

@Entity('user')
export class UserEntity {
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

  // @ManyToMany(type => CustomerEntity)
  //   @JoinTable({name : 'user_use_Customer'})
  //   users: UserEntity[];

  @ManyToMany(type => CustomerEntity, customer => customer.users)
  // @JoinTable({name : 'user_use_customer'})
  customers: CustomerEntity[];

  @Column()
  isPublished?: boolean;
}