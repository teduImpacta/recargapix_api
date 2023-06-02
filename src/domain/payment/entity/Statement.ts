import { BaseEntity } from '../../../main/common'
import { Column, Entity, OneToOne } from 'typeorm'
import { Payment } from './Payment'

@Entity()
export class Statement extends BaseEntity {
    @OneToOne(() => Payment, payment => payment.statement, {
        eager: true,
        onDelete: 'SET NULL'
    })
    payment: Payment

    @Column()
    value: number

    @Column()
    txid: string
}
