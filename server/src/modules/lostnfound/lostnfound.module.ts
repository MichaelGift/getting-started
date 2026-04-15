import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/db.module';
import { LostnFoundService } from './lostnfound.service';
import { LostnFoundController } from './lostnfound.controller';

@Module({
  imports: [DatabaseModule],
  providers: [LostnFoundService],
  controllers: [LostnFoundController],
})
export class LostnFoundModule {}
