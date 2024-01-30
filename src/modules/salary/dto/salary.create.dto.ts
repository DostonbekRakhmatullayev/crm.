import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class salaryCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  price_id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  workers_id: string;
}
