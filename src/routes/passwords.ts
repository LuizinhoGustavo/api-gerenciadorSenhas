import { FastifyInstance } from "fastify"
import { knex } from "../database"
import { randomUUID } from "node:crypto"
import { z } from "zod"

export async function passwordsRoutes(app: FastifyInstance){
    // GET
    app.get('/', async () => {
        const data = knex('passwords').select('*')

        return data
    })

    // POST
    app.post('/', async (request, reply) => {
        const createPassword = z.object({
            titulo: z.string(),
            usuario: z.string(),
            senha: z.string(),
            linkSite: z.string()
        })

        const { titulo, usuario, senha, linkSite } = createPassword.parse(request.body)

        await knex('passwords').insert({
            id: randomUUID(),
            titulo,
            usuario,
            senha,
            linkSite
        })

        return reply.status(201).send()
    })

    // PUT

    app.put('/:id', async (request, reply) => {
        const updatePassword = z.object({
            titulo: z.string(),
            usuario: z.string(),
            senha: z.string(),
            linkSite: z.string()
        })

        const { titulo, usuario, senha, linkSite } = updatePassword.parse(request.body)

        const paramsSchema = z.object({
            id: z.string()
        })
        const { id } = paramsSchema.parse(request.params)

        await knex('passwords').where({ id }).update({
            titulo,
            usuario,
            senha,
            linkSite
        })

        return reply.status(204).send()
    })

    // PATCH
    app.patch('/:id', async (request, reply) => {
        const updateTitle = z.object({
            titulo: z.string()
        })

        const { titulo } = updateTitle.parse(request.body)

        const paramsSchema = z.object({
            id: z.string()
        })
        const { id } = paramsSchema.parse(request.params)

        await knex('passwords').where({ id }).update({
            titulo
        })

        return reply.status(204).send()
    })

    // DELETE

    app.delete('/:id', async (request, reply) => {
        const paramsSchema = z.object({
            id: z.string()
        })
        const { id } = paramsSchema.parse(request.params)

        await knex('passwords').where({ id }).delete()

        return reply.status(204).send()
    })

}