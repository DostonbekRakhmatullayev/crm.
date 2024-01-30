import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class PrizeCreateDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  prize: number;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  prize_text: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  workers_id: string;
}
