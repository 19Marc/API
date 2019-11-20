"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const users_model_1 = require("./users.model");
let UsersService = class UsersService {
    constructor() {
        this.users = [];
    }
    insertUser(name, firstName, age) {
        const userId = Math.random().toString();
        const newUser = new users_model_1.User(userId, name, firstName, age);
        this.users.push(newUser);
        return userId;
    }
    getUsers() {
        return [...this.users];
    }
    getOneUser(userId) {
        const user = this.findUser(userId)[0];
        return Object.assign({}, user);
    }
    updateUser(userId, name, firstName, age) {
        const [user, index] = this.findUser(userId);
        const updatedUser = Object.assign({}, user);
        if (name) {
            updatedUser.name = name;
        }
        if (firstName) {
            updatedUser.firstName = firstName;
        }
        if (age) {
            updatedUser.age = age;
        }
        this.users[index] = updatedUser;
    }
    deleteUser(userId) {
        const index = this.findUser(userId)[1];
        this.users.splice(index, 1);
    }
    findUser(id) {
        const userIndex = this.users.findIndex(user => user.id === user.id);
        const user = this.users[userIndex];
        if (!user) {
            throw new common_1.NotFoundException('Could not find User');
        }
        return [user, userIndex];
    }
};
UsersService = __decorate([
    common_1.Injectable()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map