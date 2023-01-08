import { Knex } from 'knex';

const tableName = 'addon';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (t) => {
    // this creates an "id" column that gets autoincremented
    t.increments('id').primary();
    t.string('name');
    t.float('price');
    t.text('description');
    t.string('category').unsigned();
    t.foreign('category').references('addoncategory.name');
    t.integer('brandId').unsigned();
    t.foreign('brandId').references('brand.id');
    t.datetime('created_at');
    t.datetime('updated_at');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
