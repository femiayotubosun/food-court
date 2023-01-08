import { BaseModel } from './base.model';
import { Model } from 'objection';
import { Brand } from './brand.model';
import { AddonCategory } from './addoncategory.model';

export class Addon extends BaseModel {
  static tableName = 'addon';

  name: string;
  price: number;
  description: string;
  category: string;
  brandId: number;

  static relationMappings = {
    brand: {
      relation: Model.BelongsToOneRelation,
      modelClass: Brand,
      join: {
        from: 'addon.brandId',
        to: 'brand.id',
      },
    },
    addonCategory: {
      relation: Model.BelongsToOneRelation,
      modelClass: AddonCategory,
      join: {
        from: 'addon.category',
        to: 'addoncategory.name',
      },
    },
  };
}
