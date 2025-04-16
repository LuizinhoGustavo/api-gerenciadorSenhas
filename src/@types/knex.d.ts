import { Knex } from 'knex'

declare module 'knex/types/tables' {
    interface Tables {
        passwords: {
            id: string
            titulo: string
            usuario: string
            senha: string
            linkSite: string
        }
    }
}