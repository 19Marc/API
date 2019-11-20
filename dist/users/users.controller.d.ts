import { UsersService } from './users.service';
export declare class UserController {
    private usersService;
    constructor(usersService: UsersService);
    addUser(userName: string, userFirstName: string, userAge: number): {
        id: string;
    };
    findAllUsers(): import("./users.model").User[];
    getOneUser(userId: string): {
        id: string;
        name: string;
        firstName: string;
        age: number;
    };
    updateUser(userId: string, name: string, firstName: string, age: number): string;
    deleteUser(userId: string): string;
}
