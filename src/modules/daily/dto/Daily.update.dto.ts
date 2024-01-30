import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class DailyUpdateDto {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  readonly advance: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly advance_name: string;
}
