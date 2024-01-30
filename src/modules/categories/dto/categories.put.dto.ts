import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class categoriesUpdateDto {
  @IsString()
  @ApiProperty()
  readonly categories_name?: string;
}
