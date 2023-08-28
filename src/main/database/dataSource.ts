import { DataSource } from 'typeorm'
import { internals } from '../config/internals'
import { Product } from '../../domain/product/entity/Product'
import { Carrier } from '../../domain/carrier/entity/Carrier'
import { CarrierValue } from '../../domain/carrier/entity/CarrierValue'
import { Recharge } from '../../domain/recharge/entity/Recharge'
import { Payment } from '../../domain/payment/entity/Payment'
import { Statement } from '../../domain/payment/entity/Statement'
import { ConnectionOptions } from 'typeorm-seeding'
import { GenerateEntities1693262449107 } from './migrations/1693262449107-GenerateEntities'

const options: ConnectionOptions = {
    type: 'postgres',
    host: internals.dbHost,
    port: internals.dbPort,
    username: internals.dbUsername,
    password: internals.dbPassword,
    database: internals.dbName,
    migrations: [GenerateEntities1693262449107],
    entities: [Product, Carrier, CarrierValue, Statement, Payment, Recharge],
    uuidExtension: 'uuid-ossp',
    factories: [],
    seeds: ['src/main/database/seeding/**/*.seed{.ts,.js}']
}

export const context = new DataSource(options)

export type Context = typeof context

export default {
    ...options
}
