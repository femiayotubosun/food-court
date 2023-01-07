import { Knex } from 'knex';

const tableName = 'addoncategory';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments('id').primary();
    table.string('name').unique().notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
