import { RouterHelper } from '@/main/common'
import { ListProductController } from '../controller/ListProductController'

export const productsRoutes = RouterHelper.route(route => {
    route.get('/products', RouterHelper.adapter(ListProductController))
})
