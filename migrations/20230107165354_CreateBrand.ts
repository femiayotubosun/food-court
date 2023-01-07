import { Knex } from 'knex';

const tableName = 'brand';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName, (table) => {
    table.increments('id').primary();
    table.string('name').unique().notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
