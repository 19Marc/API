import {Injectable} from "@nestjs/common";
import {TypeOrmModuleOptions, TypeOrmOptionsFactory} from "@nestjs/typeorm";
var path = require('path');
import {ConfigService} from "./config.service";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly config: ConfigService) {
  }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.config.get('DATABASE_HOST'),
      port: this.getDatabasePort(),
      username: this.config.get('DATABASE_USER'),
      password: this.config.get('DATABASE_PASSWORD'),
      database: this.config.get('DATABASE_NAME'),
      entities: [path.join(__dirname, '../') + '**/*.entity.{ts,js}'],
      synchronize: true,
      logging: true,
      trace: true
    };
  }

  getDatabasePort(): number {
    return (this.config.get('DATABASE_PORT')) ? + this.config.get('DATABASE_PORT') : 3306;
  }
}