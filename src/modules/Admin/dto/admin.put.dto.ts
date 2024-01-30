import { ApiProperty } from '@nestjs/swagger';
import { Admin } from './../../../entities/admin.entities';
import { IsOptional, IsString } from 'class-validator';

export class AdminUpdateDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly first_name?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly last_name?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly email?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly password?: string;
}
