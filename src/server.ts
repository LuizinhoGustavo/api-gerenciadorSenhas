import fastify from "fastify"; // Importa o fastify
import { env } from "./env";
import { passwordsRoutes } from "./routes/passwords";

const app = fastify() // Cria a instância do fastfy

app.register(passwordsRoutes, {
    prefix: 'passwords'
}) // Chama as endpoints no plugin de transactionsRoutes

app.listen({
    port: env.PORT
}).then(() => {
    console.log('HTTP Server Running')
})
