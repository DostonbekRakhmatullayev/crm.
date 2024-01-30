import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class PenaltyUpdateDto {
  @IsString()
  @ApiProperty()
  @IsOptional()
  readonly penalty: number;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly penalty_name: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly workers: string;
}
