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

import { CategoriesService } from './categories.service';
import { CategoriesCreateDto } from './dto/categories.create.dto';
import { categoriesUpdateDto } from './dto/categories.put.dto';
import { ApiHeader, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
@Controller()
@ApiTags('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get('/categories')
  @ApiHeader({
    name: 'token',
    description: 'token',
  })
  @ApiOperation({ summary: 'categorylarni olish hammasini' })
  async findAll(@Req() req: Request) {
    return await this.categoriesService.findAll();
  }

  @Post('/categories')
  @ApiHeader({
    name: 'token',
    description: 'Token',
  })
  @ApiOperation({ summary: 'categorylarni create qilish' })
  async categoriesCreate(@Body() body: CategoriesCreateDto, @Req() req?) {
    return await this.categoriesService.categoriesCreate(req, body);
  }

  @Put('/categories/:id')
  @ApiHeader({
    name: 'token',
    description: 'Token',
  })
  @ApiParam({
    name: 'id',
    description: 'category id',
  })
  @ApiOperation({ summary: 'categorylarni id boyicha update qilish' })
  async categoriesUpdate(
    @Param() param: string,
    @Req() req: Express.Request,
    @Body() body?: categoriesUpdateDto,
  ) {
    return await this.categoriesService.categoriesUpdate(param, req, body);
  }

  @Delete('/categories/:id')
  @ApiHeader({
    name: 'token',
    description: 'Token',
  })
  @ApiParam({
    name: 'id',
    description: 'category id',
  })
  @ApiOperation({ summary: 'categorylarni id boyicha delete qilish' })
  async categoriesDelete(@Param() param: string) {
    return await this.categoriesService.categoriesDelete(param);
  }
}
