import { Repository, EntityRepository } from 'typeorm';
import { CustomerEntity } from './entity/customer.entity';

@EntityRepository(CustomerEntity)
export class CustomerRepository extends Repository<CustomerEntity> {}