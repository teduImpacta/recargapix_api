import { RouterHelper } from '@/main/common'
import { ListGiftCardController } from '../controller/ListGiftCardController'

export const giftCardRoutes = RouterHelper.route(route => {
    route.get('/giftcards', RouterHelper.adapter(ListGiftCardController))
})
