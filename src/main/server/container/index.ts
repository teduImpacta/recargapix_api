import '@domain/product/container'
import '@domain/carrier/container'
import '@domain/recharge/container'
import { container } from 'tsyringe'
import { PagarmeIntegration } from '@/integration/PagarmeIntegration'

container.registerSingleton('pagarmeIntegration', PagarmeIntegration)
