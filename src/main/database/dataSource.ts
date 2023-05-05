import { DataSource } from 'typeorm'
import { internals } from '../config/internals'
import { Product } from '../../domain/product/entity/Product'
import { CreateProduct1683258049754 } from './migrations/1683258049754-CreateProduct'

export const context = new DataSource({
    type: 'postgres',
    host: internals.dbHost,
    port: internals.dbPort,
    username: internals.dbUsername,
    password: internals.dbPassword,
    database: internals.dbName,
    migrations: [CreateProduct1683258049754],
    entities: [Product],
    uuidExtension: 'uuid-ossp'
})

export type Context = typeof context
