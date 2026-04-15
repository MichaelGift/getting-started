import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LostnFoundService } from './lostnfound.service';
import { MissingItem, MissingItemDTO } from '../../database/entities';

@Controller('lostnfound')
export class LostnFoundController {
  constructor(private itemService: LostnFoundService) {}

  @Post()
  async createItem(
    @Body() data: MissingItemDTO,
  ): Promise<MissingItem | undefined> {
    return this.itemService.createItem(data);
  }

  @Get()
  async findAll(): Promise<MissingItem[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MissingItem | undefined> {
    return this.itemService.findOne(id);
  }

  @Put(':id')
  async updateItem(
    @Param('id') id: string,
    @Body() data: MissingItemDTO,
  ): Promise<MissingItem | undefined> {
    return this.itemService.update(id, data);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ): Promise<{ message: string } | undefined> {
    return this.itemService.delete(id);
  }
}
