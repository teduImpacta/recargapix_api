import { BaseEntity } from '../../../main/common'
import { Column, Entity } from 'typeorm'

@Entity()
export class Consultor extends BaseEntity {
    @Column({
        name: 'postal_code'
    })
    postalCode: string

    @Column()
    phone: string

    @Column()
    number: string
}
