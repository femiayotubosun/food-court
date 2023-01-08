import { Model } from 'objection';
import { BaseModel } from './base.model';
import * as path from 'path';

export class Brand extends BaseModel {
  static tableName = 'brand';
  name: string;

  static get relationMappings() {
    return {
      addons: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, 'Movie'),
        join: {
          from: 'brand.id',
          to: 'addon.brandId',
        },
      },
    };
  }
}
