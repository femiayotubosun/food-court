import { Module } from '@nestjs/common';
import { BrandModule } from './brand/brand.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, BrandModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
