import knexModule from 'knex'
import type { Knex } from 'knex'

export const config: Knex.Config = {
    client: 'sqlite',
    connection: {
        filename: './db/app.db'
    },
    useNullAsDefault: true,
    migrations: {
        extension: 'ts',
        directory: './db/migrations'
    }
}

export const knex = knexModule(config)
