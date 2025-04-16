import fastify from "fastify"; // Importa o fastify
import { env } from "./env";
import { passwordsRoutes } from "./routes/passwords";

const app = fastify()

app.register(passwordsRoutes, {
    prefix: 'passwords'
})

app.listen({
    port: env.PORT
}).then(() => {
    console.log('HTTP Server Running')
})
