import { BaseRepository } from '@/main/common'
import { Product } from '../entity/Product'

export class ProductRepository extends BaseRepository<Product> {
    constructor() {
        super(Product)
    }
}
