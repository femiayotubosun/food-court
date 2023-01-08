import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import { User } from 'src/database/models/user.model';

@Module({
  imports: [ObjectionModule.forFeature([User])],
  providers: [UserService, UserRepository],
  exports: [UserModule],
})
export class UserModule {}
