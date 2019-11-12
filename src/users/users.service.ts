import { Injectable } from '@nestjs/common';

import { User } from './users.model'; 

@Injectable()
export class UsersService {
  users: User[] = [];

  insertUser(name: string, firstName: string, age: number) {
    const userId = new Date().toString();
    const newUser = new User(userId, name, firstName, age);
    this.users.push(newUser); 
    return userId;
  }
}