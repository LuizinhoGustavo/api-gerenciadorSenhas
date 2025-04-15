import { FastifyInstance } from "fastify"
import knex from "knex"

export async function passwordsRoutes(app: FastifyInstance){
    app.get('/hello', async () => {
        return 'oiii'
    })
}