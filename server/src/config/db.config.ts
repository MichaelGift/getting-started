import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs('db', (): TypeOrmModuleOptions => {
  const config = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt('5432', 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    autoloadEntities: true,
    synchronize: true,
    entities: [__dirname + '/../**/*.entity.js'],
  } as TypeOrmModuleOptions;
  return config;
});