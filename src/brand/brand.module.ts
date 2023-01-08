import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { BrandRepository } from './brand.repository';
import { DatabaseModule } from '../database/database.module';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [DatabaseModule, AuthModule, UserModule],
  controllers: [BrandController],
  providers: [BrandRepository, BrandService],
  exports: [BrandModule, BrandRepository],
})
export class BrandModule {}
