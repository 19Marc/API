import { User } from './users.model';
export declare class UsersService {
    private users;
    insertUser(name: string, firstName: string, age: number): string;
    getUsers(): User[];
    getOneUser(userId: string): {
        id: string;
        name: string;
        firstName: string;
        age: number;
    };
    updateUser(userId: string, name: string, firstName: string, age: number): void;
    deleteUser(userId: string): void;
    private findUser;
}
