import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { MissingItem } from './database/entities/';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Testing Part')
@Controller('Testing Part')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getUser(missingItem: MissingItem): MissingItem {
    return new MissingItem();
  }

  @Put()
  updateUser() {}
}
