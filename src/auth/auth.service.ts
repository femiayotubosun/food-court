import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from 'src/user/user.repository';
import * as bcrypt from 'bcrypt';
import { LoginCredentialsDto } from './dto/login-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';
import { UserRole } from './user-roles.enum';
import { User } from 'src/database/models/user.model';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(dto: SignupCredentialsDto): Promise<User> {
    return await this.userRepository.createUser({
      ...dto,
      role: UserRole.USER,
    });
  }

  async signUpAsAdmin(dto: SignupCredentialsDto): Promise<User> {
    return await this.userRepository.createUser({
      ...dto,
      role: UserRole.ADMIN,
    });
  }

  async signIn(
    authCredentialsDto: LoginCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { email, password } = authCredentialsDto;
    const user = await this.userRepository.findUserByEmail(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { email };
      const accessToken: string = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Please check your credentials');
    }
  }
}
