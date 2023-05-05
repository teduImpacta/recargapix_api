import { AppError } from '@/main/common'
import { inject, injectable } from 'tsyringe'
import { ProductRepository } from '../repository/ProductRepository'

@injectable()
export class ListAllProductsService {
    constructor(
        @inject('productRepository')
        private readonly repository: ProductRepository
    ) {}

    public async execute() {
        try {
            return await this.repository.list()
        } catch (err) {
            console.log(err)
            return new AppError('Fail to get products list', 500)
        }
    }
}
