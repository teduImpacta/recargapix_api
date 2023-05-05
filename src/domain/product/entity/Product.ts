import { Entity, Column } from 'typeorm'
import { BaseEntity, ProductType } from '../../../main/common'

@Entity({
    synchronize: true
})
export class Product extends BaseEntity {
    @Column()
    name: string

    @Column('enum', {
        enum: ProductType
    })
    type: ProductType
}
