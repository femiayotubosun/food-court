import { IsString, IsEmail } from 'class-validator';

export class SignupCredentialsDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
