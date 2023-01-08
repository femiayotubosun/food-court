import { Module } from '@nestjs/common';
import { AddonService } from './addon.service';
import { AddonController } from './addon.controller';
import { BrandModule } from '../brand/brand.module';
import { AddonRepository } from './addon.repository';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import { AddonCategory } from '../database/models/addoncategory.model';
import { Brand } from '../database/models/brand.model';
import { Addon } from '../database/models/addon.model';
import { AddonCategoryRepository } from './addoncategory.repository';

@Module({
  controllers: [AddonController],
  providers: [AddonService, AddonRepository, AddonCategoryRepository],
  imports: [
    BrandModule,
    ObjectionModule.forFeature([Addon, AddonCategory, Brand]),
  ],
})
export class AddonModule {}
