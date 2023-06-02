import { RouterHelper } from '@/main/common'
import { CreatePaymentController } from '../controller/CreatePaymentController'

export const paymentRoutes = RouterHelper.route(route => {
    route.post('/payment/pix', RouterHelper.adapter(CreatePaymentController))
})
