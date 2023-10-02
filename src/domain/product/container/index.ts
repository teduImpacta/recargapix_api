import { container } from 'tsyringe'
import { ProductRepository } from '../repository/ProductRepository'
import { ListAllProductsService } from '../services/ListAllProductsService'
import { GiftCardRepository } from '../repository/GiftCardRepository'
import { ListGiftCardService } from '../services/ListGiftCardService'

container.registerSingleton('productRepository', ProductRepository)
container.registerSingleton('listProductService', ListAllProductsService)
container.registerSingleton('giftCardRepository', GiftCardRepository)
container.registerSingleton('listGiftCardService', ListGiftCardService)
