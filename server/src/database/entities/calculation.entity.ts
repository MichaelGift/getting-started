import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsIn, IsNumber } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Calculation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  numOne: number;

  @Column()
  numTwo: number;

  @Column()
  operation: string;

  @Column()
  result: number;

  @CreateDateColumn()
  createdAt: Date;
}

export class CalculationDTO {
  @ApiProperty({
    description: 'First number',
    example: 1,
  })
  @IsNumber()
  numOne: number;

  @ApiProperty({
    description: 'Second number',
    example: 2,
  })
  @IsNumber()
  numTwo: number;

  @ApiProperty({
    description: 'Operation sign',
    example: '+',
  })
  @IsIn(['+', '-', '*', '/'])
  operation: string;
}

export class UpdateCalculationDTO extends PartialType(CalculationDTO) {}
