import { Carrier } from '../../carrier/entity/Carrier'
import { BaseEntity, ProductType, RechargeStatus } from '../../../main/common'
import { Column, Entity, OneToMany, OneToOne } from 'typeorm'
import { Payment } from '../../payment/entity/Payment'

@Entity()
export class Recharge extends BaseEntity {
    @OneToMany(() => Payment, payment => payment.recharge, {
        onDelete: 'CASCADE',
        nullable: true,
        eager: false
    })
    payment?: Payment[]

    @OneToOne(() => Carrier, carrier => carrier.recharge, {
        eager: true,
        onDelete: 'SET NULL'
    })
    carrier: Carrier

    @Column('enum', {
        enum: RechargeStatus
    })
    status: RechargeStatus

    @Column()
    phone: string

    @Column('enum', {
        enum: ProductType
    })
    product: ProductType

    @Column()
    value: number
}
