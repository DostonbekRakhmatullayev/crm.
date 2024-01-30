import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class  CategoriesCreateDto{
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  categories_name: string;
}
