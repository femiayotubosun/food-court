import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginCredentialsDto } from './dto/login-credentials.dto';
import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guards/roles.guard';
import { UserRole } from './user-roles.enum';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';
import { User } from 'src/database/models/user.model';

// TODO change signup response
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() dto: SignupCredentialsDto): Promise<User> {
    return this.authService.signUp(dto);
  }

  @Post('/signup/admin')
  async signUpAsAdmin(@Body() dto: SignupCredentialsDto): Promise<any> {
    return await this.authService.signUpAsAdmin(dto);
  }

  @Post('/signin')
  signIn(
    @Body() authCredentialsDto: LoginCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }

  @Roles(UserRole.USER)
  @UseGuards(AuthGuard(), RolesGuard)
  @Get('/test')
  test(@Req() req) {
    console.log(req);
  }
}

// TODO Test auth
