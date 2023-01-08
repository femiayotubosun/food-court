import { Module } from '@nestjs/common';
import { BrandModule } from './brand/brand.module';
import { DatabaseModule } from './database/database.module';
import { AddonModule } from './addon/addon.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule, BrandModule, AddonModule, AuthModule, UserModule],
})
export class AppModule {}
