import {
  Controller,
  Get,
  Req,
  Body,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { PrizeService } from './prize.service';
import { PrizeCreateDto } from './dto/prize.create.dto';
import { PrizeUpdateDto } from './dto/prize.update.dto';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('/prize')
@ApiTags('Prize')
export class PrizeController {
  constructor(private readonly prizeService: PrizeService) {}

  @Get('/get')
  @ApiOperation({ summary: 'prizelarni olish hammasini' })
  async findAll(@Req() req: Request) {
    return await this.prizeService.findAll();
  }

  @Post('/create')
  @ApiOperation({ summary: 'prize create qilish' })
  async prizeCreate(@Body() body: PrizeCreateDto) {
    return await this.prizeService.prizeCreate(body);
  }

  @Put('/update/:id')
  @ApiParam({
    name: 'id',
    description: 'Admin id',
  })
  @ApiOperation({ summary: 'prize update qilish' })
  async prizeUpdate(@Param() param: string, @Body() body?: PrizeUpdateDto) {
    return await this.prizeService.prizeUpdate(param, body);
  }

  @Delete('/delete/:id')
  @ApiParam({
    name: 'id',
    description: 'Admin id',
  })
  @ApiOperation({ summary: 'prize delte qilish' })
  async prizeDelete(@Param() param: string) {
    return await this.prizeService.prizeDelete(param);
  }
}
