import { Column, Entity } from 'typeorm'
import { BaseEntity, GiftCardCategory } from '../../../main/common'

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
}
