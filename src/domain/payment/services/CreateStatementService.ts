import { AppError, CreateStatementDto, IService } from '@/main/common'
import { inject, injectable } from 'tsyringe'
import { StatementRepository } from '../repository/StatementRepository'
import { PaymentRepository } from '../repository/PaymentRepository'
import { Statement } from '../entity/Statement'

@injectable()
export class CreateStatementService implements IService {
    constructor(
        @inject('statementRepository')
        private readonly repository: StatementRepository,
        @inject('paymentRepository')
        private readonly paymentRepository: PaymentRepository
    ) {}

    public async execute({
        paymentId,
        txid,
        value
    }: CreateStatementDto): Promise<Statement> {
        const payment = await this.paymentRepository.get(paymentId)

        if (!payment) throw new AppError('Pagamento não encontrada', 400)

        return await this.repository.create({
            payment,
            txid,
            value
        })
    }
}
