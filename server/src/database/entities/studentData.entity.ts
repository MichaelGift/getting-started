import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StudentData{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;
}
export class StudentDataDTO {
  @ApiProperty({
    description: 'Name of the student',
    example: 'Alex',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'This the student email',
    example: 'asi@gmail.com',
  })
  @IsString()
  email: string;
}

export class UpdateStudentDataDTO extends PartialType(StudentDataDTO) {}
