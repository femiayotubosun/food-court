import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { BrandRepository } from './brand.repository';
import { Brand } from 'src/database/models/brand.model';
import { ObjectionModule } from '@willsoto/nestjs-objection';

@Module({
  imports: [ObjectionModule.forFeature([Brand])],
  controllers: [BrandController],
  providers: [BrandRepository, BrandService],
})
export class BrandModule {}
