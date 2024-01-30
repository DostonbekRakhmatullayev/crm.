import {
  Controller,
  Get,
  Req,
  Post,
  Put,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { Request } from 'express';
import { salaryCreateDto } from './dto/salary.create.dto';

import { SalaryService } from './salary.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('/monthly')
@ApiTags('Salary')
export class MonthlyController {
  constructor(private readonly monthlyServic: SalaryService) {}

  @Get('/get')
  @ApiOperation({ summary: 'salary olish hammasini' })
  async findAll(@Req() req: Request) {
    return await this.monthlyServic.findAll();
  }

  // Ham post ham update
  @Post('/create')
  @ApiOperation({ summary: ' salary create qilish' })
  async monthlyCreate(@Body() body: salaryCreateDto) {
    return await this.monthlyServic.salaryCreate(body);
  }

  // @Put('/update/:id')
  // async monthlyUpdate(@Param() param: string, @Req() req?: Request) {
  //   return await this.monthlyServic.salaryUpdate(param, req);
  // }

  @Delete('/delete/:id')
  @ApiOperation({ summary: ' salary delete qilish' })
  async monthlyDelete(@Param() param: string) {
    return await this.monthlyServic.salaryDelete(param);
  }
}
