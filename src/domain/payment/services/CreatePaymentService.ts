import { AppError, IService } from '@/main/common'
import { inject, injectable } from 'tsyringe'
import { GetByIdRechargeService } from '@/domain/recharge/services/GetByIdRechargeService'
import { PagarmeIntegration } from '@/integration/PagarmeIntegration'
import { PaymentRepository } from '../repository/PaymentRepository'

@injectable()
export class CreatePaymentService implements IService {
    constructor(
        @inject('paymentRepository')
        private readonly repository: PaymentRepository,
        @inject('getByIdRechargeService')
        private readonly rechargeService: GetByIdRechargeService,
        @inject('pagarmeIntegration')
        private readonly integration: PagarmeIntegration
    ) {}

    public async execute(rechargeId: string) {
        const recharge = await this.rechargeService.execute(rechargeId)

        if (!recharge) throw new AppError('Recarga não encontrada', 400)

        const { value } = recharge

        const { data } = await this.integration.payWithPix({
            value
        })

        if (data.status !== 'pending') {
            throw new AppError('Falha ao gerar pix', 500)
        }

        const pix = data.charges.find(item => item.payment_method === 'Pix')

        if (!pix) throw new AppError('Pix não habilitado para pagamento', 400)

        const { qr_code: qrCodeEmvCo, qr_code_url: qrCode } =
            pix.last_transaction

        return await this.repository.create({
            qrCode,
            qrCodeEmvCo,
            txId: data.id,
            timeToCheckPaymentInSeconds: 20,
            timeToExpireInSeconds: 180,
            value
        })
    }
}
