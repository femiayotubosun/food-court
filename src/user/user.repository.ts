import { User } from 'src/database/models/user.model';
import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(@Inject(User) private readonly user: typeof User) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const user = await this.user.query().insert(dto);
    return await this.findUserById(user.id);
  }

  async findUserById(id: number): Promise<User> {
    return await this.user.query().select('id', 'email').findById(id);
  }

  async findUserByEmail(email: string): Promise<User> {
    return await this.user.query().findOne({
      email,
    });
  }

  async findUsers(): Promise<Iterable<User>> {
    return await this.user.query();
  }

  async updateUser(id: number, dto: UpdateUserDto): Promise<boolean> {
    try {
      await this.user.query().findById(id).patch(dto);
      return true;
    } catch {
      return false;
    }
  }

  async deleteUser(id: number) {
    try {
      await this.user.query().deleteById(id);
      return true;
    } catch {
      return false;
    }
  }
}
