import { BaseEntity } from '../../../main/common'
import { Column, Entity, OneToMany } from 'typeorm'
import { CarrierValue } from './CarrierValue'
import { Recharge } from '../../recharge/entity/Recharge'

@Entity()
export class Carrier extends BaseEntity {
    @Column()
    name: string

    @Column()
    ddd: string

    @Column()
    logo: string

    @OneToMany(() => CarrierValue, carrierValue => carrierValue.carrier, {
        onDelete: 'CASCADE',
        eager: true
    })
    values: CarrierValue[]

    @OneToMany(() => Recharge, recharge => recharge.carrier, {
        nullable: true,
        onDelete: 'SET NULL'
    })
    recharge?: Recharge[]
}
