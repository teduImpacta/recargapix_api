import { Column, Entity, ManyToOne } from 'typeorm'
import { BaseEntity } from '../../../main/common'
import { GiftCard } from './GiftCard'

@Entity('giftcard_values')
export class GiftCardValue extends BaseEntity {
    @Column({
        type: 'float'
    })
    value: number

    @Column()
    description: string

    @ManyToOne(() => GiftCard, giftcard => giftcard.id)
    giftcard: GiftCard
}
