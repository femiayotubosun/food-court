import { Module } from '@nestjs/common';
import { ObjectionModule } from '@willsoto/nestjs-objection';

@Module({
  imports: [
    ObjectionModule.register({
      config: {
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: {
          filename: 'dev.sqlite3',
        },
      },
    }),
  ],
  exports: [ObjectionModule],
})
export class DatabaseModule {}
