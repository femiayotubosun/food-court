import { BaseModel } from './base.model';

export class AddonCategory extends BaseModel {
  static tableName = 'addoncategory';
  name: string;
}
