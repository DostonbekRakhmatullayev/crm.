import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ProvicesUpdateDto {
  @IsString()
  @ApiProperty()
  readonly provinces_text?: string;
}
