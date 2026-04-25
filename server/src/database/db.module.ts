import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Calculation, MissingItem, StudentData } from './entities';


@Module({
  imports: [TypeOrmModule.forFeature([MissingItem, StudentData, Calculation])],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
