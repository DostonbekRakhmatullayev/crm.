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
import { PenaltyService } from './penalty.service';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { PenaltyCreateDto } from './dto/penalty.create.dto';
import { PenaltyUpdateDto } from './dto/penalty.update.dto';

@Controller('/penalty')
@ApiTags('Penalty')
export class PenaltyController {
  constructor(private readonly penaltyService: PenaltyService) {}

  @Get('/get')
  @ApiOperation({ summary: 'penaltylarni olish ' })
  async findAll(@Req() req: Request) {
    return await this.penaltyService.findAll();
  }

  @Post('/create')
  @ApiOperation({ summary: 'penalty create qilish' })
  async penaltyCreate(@Req() req: Request, @Body() body: PenaltyCreateDto) {
    return await this.penaltyService.penaltyCreate(req, body);
  }

  @Put('/update/:id')
  @ApiParam({
    name: 'id',
    description: 'penalty id',
  })
  @ApiOperation({ summary: 'penalty update qilish' })
  async penaltyUpdate(
    @Param() param: string,
    @Req() req: Request,
    @Body() body: PenaltyUpdateDto,
  ) {
    return await this.penaltyService.penaltyUpdate(param, req, body);
  }

  @Delete('/delete/:id')
  @ApiParam({
    name: 'id',
    description: 'Penalty id',
  })
  @ApiOperation({ summary: 'penalty delete qilish' })
  async penaltyDelete(@Param() param: string) {
    return await this.penaltyService.penaltyDelete(param);
  }
}
