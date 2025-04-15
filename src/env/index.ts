 import 'dotenv/config'
 import { z } from 'zod'

 const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    DATABASE_URL: z.string(),
    PORT: z.number().default(3333)
 })

 const _env = envSchema.safeParse(process.env) // Verifica se no process.env existe um DATABASE_URL e se ela passa na validação (nesse caso, se é uma string)

 if (_env.success === false){
    console.error('Invalid environment variables', _env.error.format)

    throw new Error('Invalid environment variables')
 }

 export const env = _env.data