import { RouterHelper } from '@/main/common'
import { CreateConsultorController } from '../controller/CreateConsultorController'

export const consultorRoutes = RouterHelper.route(route => {
    route.post('/consultor', RouterHelper.adapter(CreateConsultorController))
})
