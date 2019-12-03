import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerEntity } from '../../customers/entity/customer.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column('int')
  views: number;

  // @ManyToMany(type => Cloth, { cascade: true })
  // @JoinTable({
  //   name: 'user_use_customer',
  //   joinColumn: { name: 'user_id', referencedColumnName: 'id '},
  //   inverseJoinColumn: { name: 'customer_id', referencedColumnName: 'id'},
  // })
  // customers: CustomerEntity[];
  // }

  // @Column()
  // isPublished?: boolean;
}