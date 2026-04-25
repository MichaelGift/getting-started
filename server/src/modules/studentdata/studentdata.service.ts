import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  StudentData,
  StudentDataDTO,
  UpdateStudentDataDTO,
} from '../../database/entities';
import { Repository } from 'typeorm';

@Injectable()
export class StudentDataService {
  constructor(
    @InjectRepository(StudentData) private studentRepo: Repository<StudentData>,
  ) {}

  async createNStudent(data: StudentDataDTO): Promise<StudentData | undefined> {
    try {
      const newStudent = this.studentRepo.create(data);
      return await this.studentRepo.save(newStudent);
    } catch (e) {
      console.error(e);
    }
  }

  async findAll(): Promise<StudentData[]> {
    return this.studentRepo.find();
  }

  async findOne(id: string): Promise<StudentData | undefined> {
    const newStudent = await this.studentRepo.findOne({ where: { id: id } });
    if (!newStudent)
      throw new NotFoundException(`Item with id ${id} not found`);
    return newStudent;
  }

  async updateStudent(
    id: string,
    data: UpdateStudentDataDTO,
  ): Promise<StudentData | undefined> {
    try {
      const newStudent = await this.studentRepo.findOne({ where: { id: id } });
      if (!newStudent)
        throw new NotFoundException(`Item with id ${id} not found`);
      Object.assign(newStudent, data);
      return await this.studentRepo.save(newStudent);
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id: string): Promise<{ message: string } | undefined> {
    try {
      const newStudent = await this.studentRepo.findOne({ where: { id: id } });
      if (!newStudent)
        throw new NotFoundException(`Item with id ${id} not found`);
      await this.studentRepo.remove(newStudent);
      return { message: 'Item deleted successfully.' };
    } catch (error) {
      console.error(error);
    }
  }
}
