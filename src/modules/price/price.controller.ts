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
import { PricCreateDto } from './dto/pric.create.dto';
import { PricUpdateDto } from './dto/pric.update.dto';
import { PricService } from './price.service';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller('/price')
@ApiTags('Price')
export class PricController {
  constructor(private readonly pricServic: PricService) {}

  @Get('/get')
  @ApiOperation({ summary: 'all pricelarni olish' })
  async findAll(@Req() req: Request) {
    return await this.pricServic.findAll();
  }

  @Post('/create')
  @ApiOperation({ summary: 'pricelar create qilish' })
  async provicesCreate(@Req() req: Request, @Body() body: PricCreateDto) {
    return await this.pricServic.provicesCreate(req, body);
  }

  @Put('/update/:id')
  @ApiParam({
    name: 'id',
    description: 'Price id',
  })
  @ApiOperation({ summary: 'pricelar update qilish' })
  async provicesUpdate(
    @Param() param: string,
    @Req() req: Request,
    @Body() body: PricUpdateDto,
  ) {
    return await this.pricServic.provicesUpdate(param, req, body);
  }

  @Delete('/delete/:id')
  @ApiParam({
    name: 'id',
    description: 'Price id',
  })
  @ApiOperation({ summary: 'pricelar delete qilish' })
  async provicesDelete(@Param() param: string) {
    return await this.pricServic.provicesDelete(param);
  }
}
