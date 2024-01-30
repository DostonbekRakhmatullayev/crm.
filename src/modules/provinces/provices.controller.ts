import {
  Controller,
  Get,
  Req,
  Post,
  Put,
  Param,
  Delete,
  Body,
} from '@nestjs/common';
import { ProvicesCreateDto } from './dto/provices.create.dto';
import { ProvicesUpdateDto } from './dto/provices.update.dto';

import { ProvicesServic } from './provices.servic';
import { ApiHeader, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
@Controller()
@ApiTags('Provices')
export class ProvicesController {
  constructor(private readonly provicesServic: ProvicesServic) {}

  @Get('/provices')
  @ApiHeader({
    name: 'token',
    description: 'Token',
  })
  @ApiOperation({ summary: 'proviceslarni olish' })
  async findAll(@Req() req: Request) {
    return await this.provicesServic.findAll();
  }

  @Post('/provices')
  @ApiHeader({
    name: 'token',
    description: 'Token',
  })
  @ApiOperation({ summary: 'provices create qilish' })
  async provicesCreate(
    @Req() req: Express.Request,
    @Body() body?: ProvicesCreateDto,
  ) {
    return await this.provicesServic.provicesCreate(req, body);
  }

  @Put('/provices/:id')
  @ApiHeader({
    name: 'token',
    description: 'Token',
  })
  @ApiParam({
    name: 'id',
    description: 'Admin id',
  })
  @ApiOperation({ summary: 'provices update qilish id boyicha qilish' })
  async provicesUpdate(
    @Param() param: string,
    @Req() req: Express.Request,
    @Body() body?: ProvicesCreateDto,
  ) {
    return await this.provicesServic.provicesUpdate(param, req, body);
  }

  @Delete('/provices/:id')
  @ApiHeader({
    name: 'token',
    description: 'Token',
  })
  @ApiParam({
    name: 'id',
    description: 'Admin id',
  })
  @ApiOperation({ summary: 'provices delete qilish id boyicha qilish' })
  async provicesDelete(@Param() param: string) {
    return await this.provicesServic.provicesDelete(param);
  }
}
