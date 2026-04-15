import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';

enum State {
  LOST = 'lost',
  AVAILABLE = 'available',
  FOUND = 'found',
}

@Entity()
export class MissingItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  name: string;

  @Column()
  color!: string;

  @Column({ type: 'enum', enum: State, default: State.LOST })
  status!: State;

  @Column()
  description: string;
}

export class MissingItemDTO {
  @ApiProperty({
    description: 'Name of the missing item',
    example: 'Key',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Color of the missing item',
    example: 'Silver',
  })
  @IsString()
  color: string;

  @ApiProperty({
    description: 'Description of the missing item',
    example: 'Key with a blue teddy bear',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Status of the missing item',
    example: '[lost, found]',
    enum: State,
    default: State.LOST,
  })
  @IsEnum(State)
  state: State;
}

export class UpdateMissingItemDTO extends PartialType(MissingItemDTO) {}
