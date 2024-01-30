import {
  Controller,
  Get,
  Req,
  Post,
  UseInterceptors,
  Put,
  Param,
  UploadedFile,
  Delete,
  Res,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AdminCreateDto } from './dto/admin.create.dto';
import { multerOptions } from 'src/helpers/multer';
import { AdminUpdateDto } from './dto/admin.put.dto';
import { AdminLoginDto } from './dto/admin.login.dto';
import { AdminService } from './admin.service';
import { Response } from 'express';
import {
  ApiBody,
  ApiConsumes,
  ApiHeader,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
@Controller('/admin')
@ApiTags('Admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('/get')
  @ApiHeader({
    name: 'token',
    description: 'Admin Token',
  })
  @ApiOperation({
    summary: 'token adminniki bolsa osha tokenga tegishli admin oladi',
  })
  async findOne(@Req() req: Request) {
    return await this.adminService.findOne(req);
  }

  @Get('/get/all')
  @ApiHeader({
    name: 'token',
    description: 'Admin Token',
  })
  @ApiOperation({ summary: 'adminlarni olish hammasini' })
  async findAll(@Req() req: Request) {
    return await this.adminService.findAll(req);
  }

  @Get('/get/all/no')
  @ApiHeader({
    name: 'token',
    description: 'Admin Token',
  })
  @ApiOperation({ summary: 'adminlarni olish activmaslarni' })
  async findAllNoActive(@Req() req: Request) {
    return await this.adminService.findAllNoActive(req);
  }

  @Post('/create')
  @ApiHeader({
    name: 'token',
    description: 'Admin Token',
  })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('images', multerOptions))
  @ApiOperation({ summary: 'Create admin with super admin' })
  async adminCreate(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: AdminCreateDto,
  ) {
    return await this.adminService.adminCreate(file, body);
  }

  @Put('/update')
  @ApiOperation({ summary: 'Admin update qilish ozini uchun' })
  @ApiHeader({
    name: 'token',
    description: 'Admin Token',
  })
  @UseInterceptors(FileInterceptor('images', multerOptions))
  async putAdmin(
    @UploadedFile() file?: Express.Multer.File,
    @Body() body?: AdminUpdateDto,
    @Req() req?,
  ) {
    return await this.adminService.adminUpdate(req, body, file);
  }

  @Post('/login')
  @ApiOperation({ summary: 'Admin login qilish' })
  async adminLogin(@Body() body: AdminLoginDto) {
    return await this.adminService.adminLogin(body);
  }

  @Delete('/delete/:id')
  @ApiOperation({ summary: 'Admin delete qilish super admin uchun' })
  @ApiHeader({
    name: 'token',
    description: 'Admin Token',
  })
  @ApiParam({
    name: 'id',
    description: 'Admin id',
  })
  async adminDelete(@Req() req?: Response, @Param() param?: string) {
    return await this.adminService.adminDelete(req, param);
  }
}
