import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.table('passwords', (table) => {
        table.string('titulo').notNullable().defaultTo('')
    }
    )
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.table('passwords', (table) => {
        table.dropColumn('titulo')
    }
    )
}
