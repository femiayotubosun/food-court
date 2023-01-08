import { Module } from '@nestjs/common';
import { AddonService } from './addon.service';
import { AddonController } from './addon.controller';
import { BrandModule } from '../brand/brand.module';
import { AddonRepository } from './addon.repository';
import { AddonCategoryRepository } from './addoncategory.repository';
import { DatabaseModule } from '../database/database.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [BrandModule, DatabaseModule, AuthModule],
  controllers: [AddonController],
  providers: [AddonService, AddonRepository, AddonCategoryRepository],
})
export class AddonModule {}
