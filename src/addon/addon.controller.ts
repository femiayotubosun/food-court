import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { AddonService } from './addon.service';
import { CreateAddonDto } from './dto/create-addon.dto';
import { UpdateAddonDto } from './dto/update-addon.dto';
import { CreateAddonCategoryDto } from './dto/create-addon-category.dto';

@Controller('brands/:brandId')
export class AddonController {
  constructor(private readonly addonService: AddonService) {}

  @Post('addons')
  async create(
    @Param('brandId') brandId: number,
    @Body() createAddonDto: CreateAddonDto,
  ) {
    return await this.addonService.createAddon(brandId, createAddonDto);
  }

  @Get('addons')
  async findAll(@Param('brandId') brandId: number) {
    return await this.addonService.findAddonsByBrandId(+brandId);
  }

  @Get('addons/:addonId')
  async findOne(
    @Param('brandId') brandId: number,
    @Param('addonId') id: string,
  ) {
    return await this.addonService.findAddonById(brandId, +id);
  }

  @Patch('addons/:addonId')
  async update(
    @Param('brandId') brandId: number,
    @Param('addonId') id: string,
    @Body() updateAddonDto: UpdateAddonDto,
  ) {
    const resp = await this.addonService.updateAddon(
      +brandId,
      +id,
      updateAddonDto,
    );
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

  @Delete('addons/:addonId')
  @HttpCode(204)
  async remove(
    @Param('brandId') brandId: number,
    @Param('addonId') id: string,
  ) {
    await this.addonService.removeAddon(+brandId, +id);
  }

  @Post('/addon-categories')
  async createAddonCategory(
    @Param('brandId') brandId: number,
    @Body() createAddonCategoryDto: CreateAddonCategoryDto,
  ) {
    return await this.addonService.createAddOnCategory(
      brandId,
      createAddonCategoryDto,
    );
  }

  @Get('/addon-categories')
  async findAddonCategoriesByBrandId(@Param('brandId') brandId: number) {
    return await this.addonService.findAddonCategoriesByBrandId(brandId);
  }
}
