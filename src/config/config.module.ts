import {Module} from '@nestjs/common';
import {ConfigService} from './config.service';
import {TypeOrmConfigService} from "./typeorm.config";

@Module({
  providers: [
    TypeOrmConfigService,
    {
      provide: ConfigService,
      useValue: new ConfigService(`${process.env.NODE_ENV || 'development'}.env`),
    },
  ],
  imports: [],
  exports: [ConfigService, TypeOrmConfigService],
})
export class ConfigModule {
}