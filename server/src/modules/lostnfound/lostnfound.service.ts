import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  MissingItem,
  MissingItemDTO,
  UpdateMissingItemDTO,
} from '../../database/entities';
import { Repository } from 'typeorm';

@Injectable()
export class LostnFoundService {
  constructor(
    @InjectRepository(MissingItem) private itemRepo: Repository<MissingItem>,
  ) {}

  async createItem(data: MissingItemDTO): Promise<MissingItem | undefined> {
    try {
      const newItem = this.itemRepo.create(data);
      return await this.itemRepo.save(newItem);
    } catch (e) {
      console.error(e);
    }
  }

  findAll(): Promise<MissingItem[]> {
    return this.itemRepo.find();
  }

  async findOne(id: string): Promise<MissingItem | undefined> {
    try {
      const item = await this.itemRepo.findOne({ where: { id: id } });
      if (!item) throw new NotFoundException(`Item with id ${id} not found`);
      return item;
    } catch (error) {
      console.error(error);
    }
  }

  async update(
    id: string,
    data: UpdateMissingItemDTO,
  ): Promise<MissingItem | undefined> {
    try {
      const item = await this.itemRepo.findOne({ where: { id: id } });
      if (!item) throw new NotFoundException(`Item with id ${id} not found`);
      Object.assign(item, data);
      return await this.itemRepo.save(item);
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id: string): Promise<{ message: string } | undefined> {
    try {
      const item = await this.itemRepo.findOne({ where: { id: id } });
      if (!item) throw new NotFoundException(`Item with id ${id} not found`);
      await this.itemRepo.remove(item);
      return { message: 'Item deleted successfully.' };
    } catch (error) {
      console.error(error);
    }
  }
}
