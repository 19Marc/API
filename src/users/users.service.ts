import { Injectable, Param, NotFoundException } from '@nestjs/common';

import { User } from './users.model'; 
// import { User } from './interfaces/user.interface';

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
    const user = this.findUser(userId)[0];
    return { ...user };
  } 

  updateUser(userId: string, name: string, firstName: string, age: number){
    const [user, index] = this.findUser(userId);
    const updatedUser = { ...user }
    if(name) {
      updatedUser.name = name;
    }
    if(firstName) {
      updatedUser.firstName = firstName;
    }
    if(age) {
      updatedUser.age = age;
    }
    this.users[index] = updatedUser;
  } 

  deleteUser(userId: string) {
    const index = this.findUser(userId)[1];
    this.users.splice(index, 1);
  }

  // Reusable Function
  private findUser(id: string): [User, number] {
    const userIndex = this.users.findIndex(user => user.id === user.id);
    const user = this.users[userIndex];
    if ( !user ) {
      throw new NotFoundException('Could not find User');
    }
    return [user, userIndex];
  }
}