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

import { AdvanceService } from './advance.service';
import { AdvanceCreateDto } from './dto/advance.create.dto';
import { AdvanceUpdateDto } from './dto/advance.update.dto';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('/advance')
@ApiTags('Advance')
export class AdvanceController {
  constructor(private readonly advanceService: AdvanceService) {}

  @Get('/get')
  @ApiOperation({ summary: 'advancelarni olish hammasini' })
  async findAll(@Req() req: Request) {
    return await this.advanceService.findAll();
  }

  @Post('/create')
  @ApiOperation({ summary: 'advancelarni create qilish' })
  async advanceCreate(@Body() body: AdvanceCreateDto) {
    return await this.advanceService.advanceCreate(body);
  }

  @Put('/update/:id')
  @ApiParam({
    name: 'id',
    description: 'advance id',
  })
  @ApiOperation({ summary: 'advancelarni update qilish' })
  async advanceUpdate(@Param() param: string, @Body() body?: AdvanceUpdateDto) {
    return await this.advanceService.advanceUpdate(param, body);
  }

  @Delete('/delete/:id')
  @ApiParam({
    name: 'id',
    description: 'advance id',
  })
  @ApiOperation({ summary: 'advancelarni delete qilish' })
  async advanceDelete(@Param() param: string) {
    return await this.advanceService.advanceDelete(param);
  }
}
