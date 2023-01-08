import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from 'src/database/models/user.model';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    return await this.userRepository.createUser(dto);
  }

  async createAdminUser(dto: CreateUserDto): Promise<User> {
    return await this.userRepository.createUser(dto);
  }

  async findUsers(): Promise<Iterable<User>> {
    return await this.userRepository.findUsers();
  }

  findUserById(id: number): Promise<User> {
    return this.userRepository.findUserById(id);
  }

  async deleteUser(id: number): Promise<boolean> {
    return await this.userRepository.deleteUser(id);
  }
}
