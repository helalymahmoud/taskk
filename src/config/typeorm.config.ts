import { ConfigModule, ConfigService } from "@nestjs/config"
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm"

export default class TypeOrmConfig{
  static getOrmConfig(configSevice:ConfigService):TypeOrmModuleOptions{
    return   {
      
    type: 'postgres',

    host:configSevice.get<string>('DB_HOST'),
     
    port: configSevice.get<number>('DB_PORRT'),

    username: configSevice.get<string>('DB_USERNAME'),

    password: configSevice.get<string>('DB_PASSWORD'),

    database: configSevice.get<string>('DB_NAME'), 

    autoLoadEntities: true,
    
    synchronize:true
  };
}}
export const typeOrmConfigAsync:TypeOrmModuleAsyncOptions ={

  imports:[ConfigModule],

  useFactory:async(ConfigService:ConfigService):Promise<TypeOrmModuleOptions>=>TypeOrmConfig.
    getOrmConfig(ConfigService),
  inject:[ConfigService]
  };
   