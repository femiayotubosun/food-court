import { BaseModel } from './base.model';

export class User extends BaseModel {
  static tableName = 'user';

  email: string;
  password: string;
  role: string;
}
