import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { UserEntity } from '../../users/entity/user.entity';

@Entity('customer')
export class CustomerEntity {
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

//   @ManyToMany(type => Cloth, { cascade: true })
//   @JoinTable({
//     name: 'cat_use_cloth',
//     joinColumn: { name: 'cat_id', referencedColumnName: 'id '},
//     inverseJoinColumn: { name: 'cloth_id', referencedColumnName: 'id'},
// })
// users: UserEntity[];
// }

  // @Column()
  // isPublished?: boolean;
}