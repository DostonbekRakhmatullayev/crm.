import { Controller, Get, Param, Res } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@Controller()
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}
  @ApiTags('Images')
  @Get('/:filename')
  @ApiParam({
    name: 'filename',
    description: 'image nomi',
  })
  @ApiOperation({ summary: 'imagelarni olish' })
  async findAll(@Param() param: any, @Res() res: Response) {
    return await this.imagesService.findAll(res, param);
  }
}
