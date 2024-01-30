import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateWorkersDto {
  @IsString()
  @ApiProperty()
  first_name: string;

  @IsString()
  @ApiProperty()
  last_name: string;

  @IsString()
  @ApiProperty()
  date_of_birth: string;

  @IsString()
  @ApiProperty()
  password: string;

  @IsString()
  @ApiProperty()
  gender: string;

  @ApiProperty()
  @IsString()
  phone_number: string;

  @ApiProperty()
  @IsString()
  personal_information: string;

  @ApiProperty()
  @IsString()
  personal_data: string;

  @ApiProperty()
  @IsString()
  categories: string;

  @ApiProperty()
  @IsString()
  provinces: string;

  @ApiProperty({ type: 'string', format: 'binary' })
  images: any;
}
