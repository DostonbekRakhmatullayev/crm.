import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class DailyCreateDto {
  @IsNumber()
  @ApiProperty()
  @IsNotEmpty()
  daily: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  workers: string;
}
