import { Product } from '../../../domain/product/entity/Product'
import { ProductType } from '../../common'
import { Connection } from 'typeorm'
import { Factory, Seeder } from 'typeorm-seeding'

export default class CreateProducts implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        await connection
            .createQueryBuilder()
            .insert()
            .into(Product)
            .values([
                {
                    name: 'Recarga de telefone',
                    type: ProductType.cellphone
                },
                {
                    name: 'Recarga de transporte',
                    type: ProductType.transport
                },
                {
                    name: 'Recarga de conteúdo',
                    type: ProductType.store
                },
                {
                    name: 'Oi Fibra',
                    type: ProductType.internet
                }
            ])
            .execute()
    }
}
