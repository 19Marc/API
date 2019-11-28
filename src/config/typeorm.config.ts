import {TypeOrmModuleOptions} from '@nestjs/typeorm';
var path = require('path');

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: "root",
    password: "password",
    database: "lineup",
    entities: [ path.join(__dirname, '../') + '**/*.entity.js' ],
    synchronize: true,
    logging: true,
}