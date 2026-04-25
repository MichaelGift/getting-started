import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import {StudentData, StudentDataDTO } from '../../database/entities';
import { ApiTags } from '@nestjs/swagger';
import { StudentDataService } from './studentdata.service';

@ApiTags('StudentData')
@Controller('studentdata')
export class StudentDataController {
  private logger = new Logger(StudentDataController.name);
  constructor(private studentService: StudentDataService) {}

  @Post()
  async createItem(
    @Body() data: StudentDataDTO,
    @Req() req: Request,
  ): Promise<StudentData | undefined> {
    this.logger.log(data);
    this.logger.log(req.body);
    return this.studentService.createNStudent(data);
  }

  @Get()
  async findAll(): Promise<StudentData[]> {
    return this.studentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StudentData | undefined> {
    return this.studentService.findOne(id);
  }

  @Put(':id')
  async updateStudent(
    @Param('id') id: string,
    @Body() data: StudentDataDTO,
  ): Promise<StudentData | undefined> {
    return this.studentService.updateStudent(id, data);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ): Promise<{ message: string } | undefined> {
    return this.studentService.delete(id);
  }
}
