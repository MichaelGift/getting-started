import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MissingItem } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([MissingItem])],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
