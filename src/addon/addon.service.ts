import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAddonDto } from './dto/create-addon.dto';
import { UpdateAddonDto } from './dto/update-addon.dto';
import { BrandRepository } from '../brand/brand.repository';
import { AddonRepository } from './addon.repository';
import { Addon } from '../database/models/addon.model';
import { AddonCategoryRepository } from './addoncategory.repository';
import { CreateAddonCategoryDto } from './dto/create-addon-category.dto';

@Injectable()
export class AddonService {
  constructor(
    private readonly brandRepository: BrandRepository,
    private readonly addonRepository: AddonRepository,
    private readonly addonCategoryRepository: AddonCategoryRepository,
  ) {}

  private async findBrandById(brandId: number) {
    const brand = await this.brandRepository.findBrandById(brandId);
    if (!brand) {
      throw new NotFoundException(`Brand with id '${brandId}' was not found`);
    }
  }

  async createAddon(brandId: number, dto: CreateAddonDto) {
    await this.findBrandById(brandId);

    const category = await this.addonCategoryRepository.findAddonCategoryByName(
      dto.category,
    );

    if (!category) {
      throw new NotFoundException(
        `Addon Category with name '${dto.category}' was not found.`,
      );
    }

    const addon = await this.addonRepository.findAddonByName(dto.name);

    if (addon) {
      throw new ConflictException(
        `Addon with name '${dto.name}' already exists.`,
      );
    }

    return await this.addonRepository.createAddonWithBrandId(brandId, dto);
  }

  async findAllAddons(brandId: number) {
    await this.findBrandById(brandId);
    return await this.addonRepository.findAddonsByBrandId(brandId);
  }

  async findAddonById(brandId: number, id: number) {
    await this.findBrandById(brandId);
    const addon = await this.addonRepository.findAddonById(id);
    if (!addon) {
      throw new NotFoundException(`Addon with id '${id}' was not found`);
    }
    return addon;
  }

  async findAddonByName(brandId: number, name: string) {
    await this.findBrandById(brandId);
    const addon = await this.addonRepository.findAddonByName(name);
    if (!addon) {
      throw new NotFoundException(`Addon with name '${name}' was not found`);
    }
    return addon;
  }

  async findAddonsByBrandId(brandId: number): Promise<Iterable<Addon>> {
    await this.findBrandById(brandId);
    return await this.addonRepository.findAddonsByBrandId(brandId);
  }

  async updateAddon(brandId: number, addonId: number, dto: UpdateAddonDto) {
    await this.findAddonById(brandId, addonId);

    if (dto.name) {
      const addon = await this.addonRepository.findAddonByName(dto.name);
      if (addon) {
        throw new ConflictException(
          `Addon with name '${addon.name}' already exists`,
        );
      }
    }

    const resp = await this.addonRepository.updateAddon(addonId, dto);
    return resp;
  }

  async removeAddon(brandId, id: number) {
    await this.findAddonById(brandId, id);
    // todo
    await this.addonRepository.deleteAddon(id);
    return;
  }

  async createAddOnCategory(brandId: number, dto: CreateAddonCategoryDto) {
    await this.findBrandById(brandId);
    const category = await this.addonCategoryRepository.findAddonCategoryByName(
      dto.name,
    );

    if (category) {
      throw new ConflictException(
        `Addon Category with name '${dto.name}' already exists`,
      );
    }

    return await this.addonCategoryRepository.createAddonCategory(brandId, dto);
  }

  async findAddonCategoriesByBrandId(brandId: number) {
    await this.findBrandById(brandId);
    return await this.addonCategoryRepository.findAddonCategoriesByBrandId(
      brandId,
    );
  }
}
