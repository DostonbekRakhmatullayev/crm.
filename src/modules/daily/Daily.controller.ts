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

import { DailyService } from './Daily.service';
import { DailyCreateDto } from './dto/Daily.create.dto';
import { DailyUpdateDto } from './dto/Daily.update.dto';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('/daily')
@ApiTags('Daily')
export class DailyController {
  constructor(private readonly dailyService: DailyService) {}

  @Get('/get')
  @ApiOperation({ summary: 'Daily olish hammasini' })
  async findAll(@Req() req: Request) {
    return await this.dailyService.findAll();
  }

  @Post('/create')
  @ApiOperation({ summary: 'Daily create qilish' })
  async dailyCreate(@Body() body: DailyCreateDto) {
    return await this.dailyService.dailyCreate(body);
  }

  @Put('/update/:id')
  @ApiParam({
    name: 'id',
    description: 'daily id',
  })
  @ApiOperation({ summary: 'Daily update qilish' })
  async advanceUpdate(@Param() param: string, @Body() body?: DailyUpdateDto) {
    return await this.dailyService.dailyUpdate(param, body);
  }

  @Delete('/delete/:id')
  @ApiParam({
    name: 'id',
    description: 'daily id',
  })
  @ApiOperation({ summary: 'Daily delete qilish' })
  async advanceDelete(@Param() param: string) {
    return await this.dailyService.dailyDelete(param);
  }
}
