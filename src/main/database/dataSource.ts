import { DataSource } from 'typeorm'
import { internals } from '../config/internals'
import { Product } from '../../domain/product/entity/Product'
import { CreateProduct1683258049754 } from './migrations/1683258049754-CreateProduct'
import { Carrier } from '../../domain/carrier/entity/Carrier'
import { CarrierValue } from '../../domain/carrier/entity/CarrierValue'
import { CreateCarrierValues1683855203106 } from './migrations/1683855203106-CreateCarrierValues'

export const context = new DataSource({
    type: 'postgres',
    host: internals.dbHost,
    port: internals.dbPort,
    username: internals.dbUsername,
    password: internals.dbPassword,
    database: internals.dbName,
    migrations: [CreateProduct1683258049754, CreateCarrierValues1683855203106],
    entities: [Product, Carrier, CarrierValue],
    uuidExtension: 'uuid-ossp'
})

export type Context = typeof context
