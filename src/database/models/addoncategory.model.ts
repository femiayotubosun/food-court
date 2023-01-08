import { BaseModel } from './base.model';
import { Model } from 'objection';
import { Brand } from './brand.model';

export class AddonCategory extends BaseModel {
  static tableName = 'addoncategory';
  name: string;
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
  };
}
