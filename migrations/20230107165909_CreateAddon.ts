import { Knex } from 'knex';

const tableName = 'addon';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments();
    table.string('name');
    table.float('price');
    table.text('description');
    table.string('category').unsigned();
    table.foreign('category').references('addoncategory.name');
    table.integer('brandId').unsigned();
    table.foreign('brandId').references('brand.name');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
