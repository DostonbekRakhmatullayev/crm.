import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class PricCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  price: number;
}
