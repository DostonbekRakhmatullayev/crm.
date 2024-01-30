import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class AdvanceCreateDto {
  @IsNumber()
  @ApiProperty()
  @IsNotEmpty()
  advance: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  advance_name: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  workers: string;
}
