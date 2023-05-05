import { container } from 'tsyringe'
import { ProductRepository } from '../repository/ProductRepository'
import { ListAllProductsService } from '../services/ListAllProductsService'

container.registerSingleton('productRepository', ProductRepository)
container.registerSingleton('listProductService', ListAllProductsService)
