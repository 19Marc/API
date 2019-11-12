import { Injectable, Param, NotFoundException } from '@nestjs/common';

import { User } from './users.model'; 

@Injectable()
export class UsersService {
  private users: User[] = [];

  insertUser(name: string, firstName: string, age: number) {
    const userId = Math.random().toString();
    const newUser = new User(userId, name, firstName, age);
    this.users.push(newUser); 
    return userId;
  }

  getUsers() {
    return [...this.users];
  }

  getOneUser(userId: string) {
    const user = this.users.find(user => user.id === user.id);
    if ( !user ) {
      throw new NotFoundException('Could not find User');
    }
    return { ...user };
  } 
}