import { productsRoutes } from '@/domain/product/routes/product.routes'
import { Router } from 'express'

export const appRoutes = (app: Router) => {
    productsRoutes(app)
}
