import { container } from 'tsyringe'
import { CreateRechargeService } from '../services/CreateRechargeService'
import { RechargeRepository } from '../repository/RechargeRepository'
import { UpdateRechargeStatusService } from '../services/UpdateRechargeStatusService'
import { GetByIdRechargeService } from '../services/GetByIdRechargeService'
import { ConsultorRepository } from '../repository/ConsultorRepository'
import { CreateConsultorService } from '../services/CreateConsultorService'

container.registerSingleton('createRechargeService', CreateRechargeService)
container.registerSingleton(
    'updateStatusRechargeService',
    UpdateRechargeStatusService
)
container.registerSingleton('getByIdRechargeService', GetByIdRechargeService)
container.registerSingleton('rechargeRepository', RechargeRepository)
container.registerSingleton('consultorRepository', ConsultorRepository)
container.registerSingleton('createConsultorService', CreateConsultorService)
