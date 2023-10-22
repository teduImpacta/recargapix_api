import { BaseEntity, ProductType, RechargeStatus } from '../../../main/common'
import { Column, Entity, OneToMany } from 'typeorm'
import { Payment } from '../../payment/entity/Payment'

@Entity()
export class Recharge extends BaseEntity {
    @OneToMany(() => Payment, payment => payment.recharge, {
        onDelete: 'CASCADE',
        nullable: true,
        eager: false
    })
    payment?: Payment[]

    @Column('enum', {
        enum: RechargeStatus
    })
    status: RechargeStatus

    @Column({
        nullable: true
    })
    phone: string

    @Column('enum', {
        enum: ProductType
    })
    product: ProductType

    @Column()
    value: number

    @Column({
        nullable: false,
        name: 'reference_id'
    })
    referenceId: string

    @Column({
        nullable: true
    })
    email: string
}
