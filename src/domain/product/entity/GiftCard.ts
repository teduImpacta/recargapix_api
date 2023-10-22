import { Column, Entity, OneToMany } from 'typeorm'
import { BaseEntity, GiftCardCategory } from '../../../main/common'
import { GiftCardValue } from './GiftCardValue'
import { Recharge } from '../../recharge/entity/Recharge'

@Entity()
export class GiftCard extends BaseEntity {
    @Column()
    name: string

    @Column()
    logo: string

    @Column('enum', {
        enum: GiftCardCategory
    })
    category: GiftCardCategory

    @OneToMany(() => GiftCardValue, giftcardValue => giftcardValue.giftcard)
    values: GiftCardValue[]

    @OneToMany(() => Recharge, recharge => recharge.id, {
        nullable: true,
        onDelete: 'SET NULL'
    })
    recharge?: Recharge[]
}
