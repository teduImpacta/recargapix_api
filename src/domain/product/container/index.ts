import { container } from 'tsyringe'
import { ProductRepository } from '../repository/ProductRepository'
import { ListAllProductsService } from '../services/ListAllProductsService'
import { GiftCardRepository } from '../repository/GiftCardRepository'
import { ListGiftCardService } from '../services/ListGiftCardService'
import { GiftCardValueRepository } from '../repository/GiftCardValueRepository'
import { ListGiftCardValuesService } from '../services/ListGiftCardValuesService'

container.registerSingleton('productRepository', ProductRepository)
container.registerSingleton('listProductService', ListAllProductsService)
container.registerSingleton('giftCardRepository', GiftCardRepository)
container.registerSingleton('giftCardValueRepository', GiftCardValueRepository)
container.registerSingleton('listGiftCardService', ListGiftCardService)
container.registerSingleton(
    'listGiftCardValuesService',
    ListGiftCardValuesService
)
