import { RouterHelper } from '@/main/common'
import { CreateRechargeController } from '../controller/CreateRechargeController'

export const rechargeRoutes = RouterHelper.route(route => {
    route.post('/recharge', RouterHelper.adapter(CreateRechargeController))
})
