import { BaseModel } from './base.model';

export class AddonModel extends BaseModel {
  static tableName = 'addon';
  name: string;
  price: number;
  description: string;
  category: string;
}
