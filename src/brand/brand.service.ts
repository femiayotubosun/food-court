import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { BrandRepository } from './brand.repository';
import { ResourceAlreadyExistsException } from '../common/exceptions/resource-exists.exception';
import { ResourceNotFoundException } from '../common/exceptions/not-found.exception';

@Injectable()
export class BrandService {
  constructor(private readonly brandRepository: BrandRepository) {}

  async createBrand(dto: CreateBrandDto) {
    const brand = await this.brandRepository.findBrandByName(dto.name);
    if (brand) {
      throw new ResourceAlreadyExistsException(
        `Brand with name '${dto.name}' already exists`,
      );
    }
    return await this.brandRepository.createBrand(dto);
  }

  async findAllBrands() {
    return await this.brandRepository.findBrands();
  }

  async findBrandById(id: number) {
    const brand = await this.brandRepository.findBrandById(id);
    return brand;
  }

  async updateBrand(id: number, dto: CreateBrandDto) {
    const brand = await this.brandRepository.findBrandByName(dto.name);
    if (brand) {
      throw new ResourceAlreadyExistsException(
        `Brand with name '${dto.name}' already exists`,
      );
    }
    const resp = await this.brandRepository.updateBrand(id, dto);
    return resp === 1;
  }

  async removeBrand(id: number) {
    const brand = await this.brandRepository.findBrandById(id);
    if (!brand) {
      throw new ResourceNotFoundException(
        `Brand with id '${id}' was not found'`,
      );
    }
    return await this.brandRepository.deleteBrand(id);
  }
}
