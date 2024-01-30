import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  monthlydaily_money: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  comment: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  workers: string;

  @ApiProperty()
  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  monthlymonth_name: string;
}
