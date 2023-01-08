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
import { UserRole } from '../auth/user-roles.enum';
import { Roles } from '../auth/decorators/roles.decorator';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/guards/roles.guard';

@Controller('brands/:brandId')
@UseGuards(AuthGuard(), RolesGuard)
export class AddonController {
  constructor(private readonly addonService: AddonService) {}

  @Post('addons')
  @Roles(UserRole.ADMIN)
  async create(
    @Param('brandId') brandId: number,
    @Body() createAddonDto: CreateAddonDto,
  ) {
    return await this.addonService.createAddon(brandId, createAddonDto);
  }

  @Get('addons')
  @Roles(UserRole.ADMIN)
  async findAll(@Param('brandId') brandId: number) {
    return await this.addonService.findAddonsByBrandId(+brandId);
  }

  @Get('addons/:addonId')
  @Roles(UserRole.ADMIN)
  async findOne(
    @Param('brandId') brandId: number,
    @Param('addonId') id: string,
  ) {
    return await this.addonService.findAddonById(brandId, +id);
  }

  @Patch('addons/:addonId')
  @Roles(UserRole.ADMIN)
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
  @Roles(UserRole.ADMIN)
  @HttpCode(204)
  async remove(
    @Param('brandId') brandId: number,
    @Param('addonId') id: string,
  ) {
    await this.addonService.removeAddon(+brandId, +id);
  }

  @Post('/addon-categories')
  @Roles(UserRole.ADMIN)
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
  @Roles(UserRole.ADMIN)
  async findAddonCategoriesByBrandId(@Param('brandId') brandId: number) {
    return await this.addonService.findAddonCategoriesByBrandId(brandId);
  }
}
