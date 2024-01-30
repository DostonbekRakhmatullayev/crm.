import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class PricUpdateDto {
  @IsString()
  @ApiProperty()
  readonly price: number;
}
