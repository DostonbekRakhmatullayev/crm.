import {
  Controller,
  Get,
  Req,
  Post,
  UseInterceptors,
  Put,
  UploadedFile,
  Param,
  Delete,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/helpers/multer';
import { CreateWorkersDto } from './dto/workers.create.dto';
import { UpdateUserDto } from './dto/workers.update.dto';
import { WorkersService } from './workers.service';
import { ApiConsumes, ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
@Controller('/workers')
@ApiTags('Workers')
export class WorkersController {
  constructor(private readonly workersService: WorkersService) {}

  @Get('/get')
  @ApiHeader({
    name: 'token',
    description: 'Token',
  })
  @ApiOperation({ summary: 'workerlarni olish' })
  async findAll() {
    return await this.workersService.findAll();
  }

  @Get('/get/:id')
  @ApiHeader({
    name: 'token',
    description: 'Token',
  })
  @ApiOperation({ summary: 'worker topish id boyicha' })
  async findOne(@Param() param: string) {
    return await this.workersService.findOne(param);
  }

  @Post('/create')
  @ApiHeader({
    name: 'token',
    description: 'Token',
  })
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'worker create qilish' })
  @UseInterceptors(FileInterceptor('images', multerOptions))
  async workersCreate(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Express.Request,
    @Body() body: CreateWorkersDto,
  ) {
    return await this.workersService.workersCreate(file, req, body);
  }

  @Put('/update/:id')
  @ApiHeader({
    name: 'token',
    description: 'Token',
  })
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'workerlarni update qilish id boyicha' })
  @UseInterceptors(FileInterceptor('images', multerOptions))
  async workersUpdate(
    @UploadedFile() file?: Express.Multer.File,
    @Req() req?: Express.Request,
    @Param() param?: string,
    @Body() body?: UpdateUserDto,
  ) {
    return await this.workersService.workersUpdate(req, file, param, body);
  }

  @Delete('/delete/:id')
  @ApiHeader({
    name: 'token',
    description: 'Token',
  })
  @ApiOperation({ summary: 'workerlarni delete qilish id boyicha' })
  async workerDelete(@Param() param?: string) {
    return await this.workersService.workerDelete(param);
  }
}
