import { IsEmail, IsString, Length, IsEnum } from 'class-validator';
import { UserRole } from '../user-roles.enum';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(7, 50)
  password: string;

  @IsString()
  @IsEnum(UserRole)
  role: UserRole;
}
