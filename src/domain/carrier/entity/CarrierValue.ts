import { BaseEntity } from '../../../main/common'
import { Column, Entity, ManyToOne } from 'typeorm'
import { Carrier } from './Carrier'

@Entity('carrier_value')
export class CarrierValue extends BaseEntity {
    @Column({
        type: 'float'
    })
    value: number

    @ManyToOne(() => Carrier, carrier => carrier.id, {
        onDelete: 'SET NULL'
    })
    carrier: Carrier
}
