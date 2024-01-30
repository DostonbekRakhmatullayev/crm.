import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PrizeUpdateDto {
  @IsNumber()
  @ApiProperty()
  @IsOptional()
  readonly prize: number;

  @IsString()
  @ApiProperty()
  @IsOptional()
  readonly prize_text: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  readonly workers_id: string;
}
