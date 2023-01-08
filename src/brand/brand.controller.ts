import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { ResourceNotFoundException } from '../common/exceptions/not-found.exception';
import { Roles } from '../auth/decorators/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UserRole } from 'src/auth/user-roles.enum';

@Controller('brands')
@UseGuards(AuthGuard(), RolesGuard)
@Roles(UserRole.ADMIN)
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  async create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandService.createBrand(createBrandDto);
  }

  // TODO: Pagination
  @Get()
  @Roles(UserRole.ADMIN)
  async findAll() {
    return this.brandService.findAllBrands();
  }

  @Get(':id')
  @Roles(UserRole.ADMIN)
  async findOne(@Param('id') id: string) {
    const brand = await this.brandService.findBrandById(+id);
    if (!brand) {
      throw new ResourceNotFoundException(
        `Brand with id '${id}' was not found`,
      );
    }
    return brand;
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN)
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
  @Roles(UserRole.ADMIN)
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    await this.brandService.removeBrand(+id);
  }
}
