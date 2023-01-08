import { Knex } from 'knex';

const tableName = 'user';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (t) => {
    // this creates an "id" column that gets autoincremented
    t.increments('id').primary();
    t.string('email').unique().notNullable();
    t.string('password');
    t.string('role');
    t.datetime('created_at');
    t.datetime('updated_at');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
