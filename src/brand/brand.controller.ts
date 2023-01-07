import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { NotFoundException } from '../common/exceptions/not-found.exception';

@Controller('brands')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  async create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandService.createBrand(createBrandDto);
  }

  // TODO: Pagination
  @Get()
  async findAll() {
    return this.brandService.findAllBrands();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const brand = await this.brandService.findBrandById(+id);
    if (!brand) {
      throw new NotFoundException(`Brand with id '${id}' was not found`);
    }
    return brand;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBrandDto: CreateBrandDto,
  ) {
    const resp = await this.brandService.updateBrand(+id, updateBrandDto);
    return resp
      ? {
          status: 'success',
          message: 'Update Successful',
        }
      : {
          status: 'failure',
          message: 'Update unsuccessful',
        };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.brandService.removeBrand(+id);
  }
}
