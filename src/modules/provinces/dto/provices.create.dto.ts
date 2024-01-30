import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class ProvicesCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  provinces_text: string;
}
