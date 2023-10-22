import { RouterHelper } from '@/main/common'
import { ListGiftCardController } from '../controller/ListGiftCardController'
import { ListGiftCardValueController } from '../controller/ListGiftCardValueController'

export const giftCardRoutes = RouterHelper.route(route => {
    route.get('/giftcards', RouterHelper.adapter(ListGiftCardController))
    route.get(
        '/giftcards/:id',
        RouterHelper.adapter(ListGiftCardValueController)
    )
})
