import { carrierRoutes } from '@/domain/carrier/routes/carrierRoutes.routes'
import { productsRoutes } from '@/domain/product/routes/product.routes'
import { Router } from 'express'

export const appRoutes = (app: Router) => {
    productsRoutes(app)
    carrierRoutes(app)
}
