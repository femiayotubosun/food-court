import { Injectable, Inject } from '@nestjs/common';
import { AddonCategory } from 'src/database/models/addoncategory.model';
import { CreateAddonCategoryDto } from './dto/create-addon-category.dto';
import { UpdateAddonCategoryDto } from './dto/update-addon-category.dto';

@Injectable()
export class AddonCategoryRepository {
  constructor(
    @Inject(AddonCategory) private readonly addonCategory: typeof AddonCategory,
  ) {}

  async createAddonCategory(
    brandId: number,
    dto: CreateAddonCategoryDto,
  ): Promise<AddonCategory> {
    const category = await this.addonCategory.query().insert({
      ...dto,
      brandId,
    });
    return await this.findAddonCategoryById(category.id);
  }

  async findAddonCategoryById(id: number) {
    return await this.addonCategory
      .query()
      .select('id', 'name', 'brandId')
      .findById(id);
  }

  async findAddonCategoryByName(name: string) {
    return await this.addonCategory
      .query()
      .select('id', 'name', 'brandId')
      .findOne({
        name: name,
      });
  }

  async findAddonCategories() {
    return await this.addonCategory.query().select('id', 'name', 'brandId');
  }

  async findAddonCategoriesByBrandId(brandId: number) {
    return await this.addonCategory
      .query()
      .select('id', 'name')
      .where('brandId', brandId);
  }

  async updateAddonCategory(id: number, dto: UpdateAddonCategoryDto) {
    return await this.addonCategory.query().findById(id).patch(dto);
  }

  async deleteAddonCategory(id: number) {
    try {
      await this.addonCategory.query().deleteById(id);
      return true;
    } catch {
      return false;
    }
  }
}
