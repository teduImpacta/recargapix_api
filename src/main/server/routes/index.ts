import { carrierRoutes } from '@/domain/carrier/routes/carrierRoutes.routes'
import { productsRoutes } from '@/domain/product/routes/product.routes'
import { consultorRoutes } from '@/domain/recharge/routes/consultor.routes'
import { rechargeRoutes } from '@/domain/recharge/routes/recharge.routes'
import { Router } from 'express'

export const appRoutes = (app: Router) => {
    productsRoutes(app)
    carrierRoutes(app)
    rechargeRoutes(app)
    consultorRoutes(app)
}
