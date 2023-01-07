import { BaseModel } from './base.model';

export class Brand extends BaseModel {
  static tableName = 'brand';
  name: string;
}
