import { Module } from '@nestjs/common';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import { Addon } from './models/addon.model';
import { AddonCategory } from './models/addoncategory.model';
import { Brand } from './models/brand.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    ObjectionModule.register({
      config: {
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: {
          filename: 'dev.sqlite3',
        },
      },
    }),
    ObjectionModule.forFeature([Addon, AddonCategory, Brand]),
  ],
  exports: [ObjectionModule],
})
export class DatabaseModule {}
