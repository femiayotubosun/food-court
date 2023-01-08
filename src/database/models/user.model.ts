import { BaseModel } from './base.model';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class User extends BaseModel {
  static tableName = 'user';

  email: string;
  password: string;
  role: string;

  $beforeInsert() {
    this.created_at = new Date();
    this.updated_at = new Date();

    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(this.password, salt);
    this.password = hashedPassword;
  }
}
