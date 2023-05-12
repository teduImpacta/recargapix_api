import { container } from 'tsyringe'
import { CarrierRepository } from '../repository/CarrierRepository'
import { ListCarrierByDddService } from '../services/ListCarrierByDddService'

container.registerSingleton('carrierRepository', CarrierRepository)
container.registerSingleton('listCarrierService', ListCarrierByDddService)
