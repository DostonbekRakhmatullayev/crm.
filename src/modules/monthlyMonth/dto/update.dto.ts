import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateDto {
  @IsNumber()
  @ApiProperty()
  @IsOptional()
  readonly monthlydaily_money: number;

  @IsString()
  @ApiProperty()
  @IsOptional()
  readonly comment: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly monthlymonth_name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly workers: string;
}
