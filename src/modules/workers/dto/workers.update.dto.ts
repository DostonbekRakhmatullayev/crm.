import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly first_name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly last_name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly date_of_birth: Date;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly password: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly gender: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly phone_number: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly personal_information: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly personal_data: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly categories: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly provinces: string;

  @ApiProperty({ type: 'string', format: 'binary' })
  images: any;
}
