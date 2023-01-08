import { Module } from '@nestjs/common';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import { Addon } from './models/addon.model';
import { AddonCategory } from './models/addoncategory.model';
import { Brand } from './models/brand.model';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    ObjectionModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          config: {
            client: 'pg',
            connection: config.get('DB_URI'),
          },
        };
      },
    }),
    ObjectionModule.forFeature([Addon, AddonCategory, Brand]),
  ],
  exports: [ObjectionModule],
})
export class DatabaseModule {}
