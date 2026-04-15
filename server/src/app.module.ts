import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import dbConfig from './config/db.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/db.module';
import { LostnFoundModule } from './modules/lostnfound/lostnfound.module';

const config = {
  isGlobal: true,
  load: [dbConfig],
  envFilePath: '.env',
};

const dbConfigFactory = {
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => {
    console.log('🔌 Attempting to connect to PostgreSQL...');
    return configService.get('db')!;
  },
  inject: [ConfigService],
};

@Module({
  imports: [
    ConfigModule.forRoot(config),
    TypeOrmModule.forRootAsync(dbConfigFactory),
    DatabaseModule,
    LostnFoundModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
