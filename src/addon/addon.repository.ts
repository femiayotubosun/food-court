import { Injectable, Inject } from '@nestjs/common';
import { Addon } from 'src/database/models/addon.model';
import { CreateAddonDto } from './dto/create-addon.dto';
import { UpdateAddonDto } from './dto/update-addon.dto';

@Injectable()
export class AddonRepository {
  constructor(@Inject(Addon) private readonly addon: typeof Addon) {}

  async findAddonsByBrandId(brandId: number): Promise<Iterable<Addon>> {
    return await this.addon
      .query()
      .select('id', 'name', 'description', 'category')
      .where('brandId', brandId);
  }

  async createAddonWithBrandId(brandId: number, dto: CreateAddonDto) {
    const addon = await this.addon.query().insert({
      ...dto,
      brandId,
    });

    return await this.findAddonById(addon.id);
  }

  async findAddonByName(name: string): Promise<Addon> {
    return await this.addon
      .query()
      .select('id', 'name', 'description', 'category')
      .findOne({ name });
  }

  async findAddonById(id: number): Promise<Addon> {
    return await this.addon
      .query()
      .select('id', 'name', 'description', 'category')
      .findById(id);
  }

  async updateAddon(id: number, dto: UpdateAddonDto) {
    try {
      await this.addon.query().findById(id).patch(dto);
      return true;
    } catch {
      return false;
    }
  }

  async deleteAddon(id: number) {
    try {
      await this.addon.query().deleteById(id);
      return true;
    } catch {
      return false;
    }
  }
}
