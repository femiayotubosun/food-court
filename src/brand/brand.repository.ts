import { Inject, Injectable } from '@nestjs/common';
import { Brand } from '../database/models/brand.model';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandRepository {
  constructor(@Inject(Brand) private readonly brand: typeof Brand) {}

  async createBrand(dto: CreateBrandDto): Promise<Brand> {
    return await this.brand.query().insert(dto);
  }

  async findBrandById(id: number) {
    return await this.brand.query().findById(id);
  }

  async findBrandByName(name: string) {
    return await this.brand.query().findOne({
      name,
    });
  }

  async findBrands() {
    return await this.brand.query();
  }

  async deleteBrand(id: number): Promise<boolean> {
    try {
      await this.brand.query().deleteById(id);
      return true;
    } catch {
      return false;
    }
  }

  async updateBrand(id: number, dto: UpdateBrandDto): Promise<number> {
    return await this.brand.query().findById(id).patch(dto);
  }
}
