import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class PenaltyCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  penalty: number;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  penalty_name: string;

  @IsString()
  @ApiProperty()
  workers: string;
}
