import { RouterHelper } from '@/main/common'
import { ListCarrierController } from '../controller/ListCarrierController'

export const carrierRoutes = RouterHelper.route(route => {
    route.get('/carriers', RouterHelper.adapter(ListCarrierController))
})
