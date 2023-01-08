import type { Knex } from 'knex';

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
    client: 'sqlite3',
    connection: {
      filename: './prod.sqlite3',
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
};

module.exports = config;
