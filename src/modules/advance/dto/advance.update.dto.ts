import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class AdvanceUpdateDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty()

  readonly advance: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly advance_name: string;
}
