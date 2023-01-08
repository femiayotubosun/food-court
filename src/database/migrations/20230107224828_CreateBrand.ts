import { Knex } from 'knex';

const tableName = 'brand';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (t) => {
    // this creates an "id" column that gets autoincremented
    t.increments('id').primary();
    t.string('name').unique().notNullable();
    t.datetime('created_at');
    t.datetime('updated_at');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
