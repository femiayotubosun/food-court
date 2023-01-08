import { PartialType } from '@nestjs/mapped-types';
import { CreateAddonCategoryDto } from './create-addon-category.dto';

export class UpdateAddonCategoryDto extends PartialType(
  CreateAddonCategoryDto,
) {}
