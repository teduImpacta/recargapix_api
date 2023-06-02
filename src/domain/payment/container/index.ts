import { container } from 'tsyringe'
import { StatementRepository } from '../repository/StatementRepository'
import { PaymentRepository } from '../repository/PaymentRepository'
import { CreatePaymentService } from '../services/CreatePaymentService'
import { CreateStatementService } from '../services/CreateStatementService'

container.registerSingleton('statementRepository', StatementRepository)
container.registerSingleton('paymentRepository', PaymentRepository)
container.registerSingleton('createPaymentService', CreatePaymentService)
container.registerSingleton('createStatementService', CreateStatementService)
