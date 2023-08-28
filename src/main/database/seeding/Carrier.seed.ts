import { Carrier } from '../../../domain/carrier/entity/Carrier'
import { CarrierValue } from '../../../domain/carrier/entity/CarrierValue'
import { Connection } from 'typeorm'
import { Factory, Seeder } from 'typeorm-seeding'
import { carriersData } from './data'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'

export default class CreateCarrier implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        const carriers = await connection
            .createQueryBuilder()
            .insert()
            .into(Carrier)
            .values(carriersData)
            .execute()

        const values = [
            {
                value: 10
            },
            {
                value: 15
            },
            {
                value: 20
            },
            {
                value: 25
            }
        ]

        await connection
            .createQueryBuilder()
            .insert()
            .into(CarrierValue)
            .values(
                carriers.identifiers.reduce(
                    (arr: QueryDeepPartialEntity<CarrierValue>[], id) => {
                        values.forEach(value => {
                            arr.push({
                                ...value,
                                carrier: id
                            })
                        })

                        return arr
                    },
                    []
                )
            )
            .execute()
    }
}
