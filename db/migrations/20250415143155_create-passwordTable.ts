import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('passwords', (table) => {
        table.uuid('id').primary()
        table.text('usuario').notNullable()
        table.text('senha').notNullable()
        table.text('linkSite').notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('passwords')
}