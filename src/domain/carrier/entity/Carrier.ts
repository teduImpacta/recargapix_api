import { BaseEntity } from '../../../main/common'
import { Column, Entity, OneToMany } from 'typeorm'
import { CarrierValue } from './CarrierValue'

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
}
