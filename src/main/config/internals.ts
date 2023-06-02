import { config } from 'dotenv'

config()

const internals = {
    passwordKey: process.env.PASSWORD_KEY,
    dbHost: process.env.DATABASE_HOST,
    dbUsername: process.env.POSTGRES_USER,
    dbPassword: process.env.POSTGRES_PASSWORD,
    dbName: process.env.POSTGRES_DB,
    dbPort: Number(process.env.DATABASE_PORT),
    serverPort: Number(process.env.SERVER_PORT),
    pagarmeUrl: process.env.PAGARME_URL,
    pagarmeKey: process.env.PAGARME_KEY
}

Object.freeze(internals)

export { internals }
