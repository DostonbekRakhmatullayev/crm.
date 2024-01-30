import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Req,
  Param,
  Body,
} from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';
import { MonthlyMonthService } from './monthly.month.service';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('/full/monthl')
@ApiTags('MonthlyMonth')
export class MonthlyMonthController {
  constructor(private readonly fullMonthService: MonthlyMonthService) {}

  @Get('/get')
  @ApiOperation({ summary: 'MonthlyMonth olish hammasinis' })
  async findAll(@Req() req: Request) {
    return await this.fullMonthService.findAll();
  }

  @Post('/create')
  @ApiOperation({ summary: 'MonthlyMonth create qilish' })
  async penaltyCreate(@Body() body: CreateDto) {
    return await this.fullMonthService.Create(body);
  }

  @Put('/update/:id')
  @ApiParam({
    name: 'id',
    description: 'MonthlyMonth id',
  })
  @ApiOperation({ summary: 'MonthlyMonth update qilish' })
  async penaltyUpdate(@Param() param: string, @Body() Body: UpdateDto) {
    return await this.fullMonthService.Update(param, Body);
  }

  @Delete('/delete/:id')
  @ApiParam({
    name: 'id',
    description: 'MonthlyMonth id',
  })
  @ApiOperation({ summary: 'MonthlyMonth delete qilish' })
  async penaltyDelete(@Param() param: string) {
    return await this.fullMonthService.Delete(param);
  }
}
