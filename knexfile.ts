import type { Knex } from 'knex';
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env.stage.prod' });

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3',
    },
    migrations: {
      directory: './src/database/migrations',
      stub: './src/database/migration.stub',
    },
    seeds: {
      directory: './src/database/seeds',
      stub: './src/database/seed.stub',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DB_URI,
    migrations: {
      directory: './src/database/migrations',
      stub: './src/database/migration.stub',
    },
    seeds: {
      directory: './src/database/seeds',
      stub: './src/database/seed.stub',
    },
  },
};

module.exports = config;
