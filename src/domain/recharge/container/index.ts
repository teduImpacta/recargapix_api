import { container } from 'tsyringe'
import { CreateRechargeService } from '../services/CreateRechargeService'
import { RechargeRepository } from '../repository/RechargeRepository'
import { UpdateRechargeStatusService } from '../services/UpdateRechargeStatusService'
import { GetByIdRechargeService } from '../services/GetByIdRechargeService'

container.registerSingleton('createRechargeService', CreateRechargeService)
container.registerSingleton(
    'updateStatusRechargeService',
    UpdateRechargeStatusService
)
container.registerSingleton('getByIdRechargeService', GetByIdRechargeService)
container.registerSingleton('rechargeRepository', RechargeRepository)
