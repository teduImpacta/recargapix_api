import { BaseRepository } from '@/main/common'
import { Payment } from '../entity/Payment'
import { Recharge } from '@/domain/recharge/entity/Recharge'
import { Statement } from '../entity/Statement'

type Data = {
    qrCode: string
    qrCodeEmvCo: string
    receiverAccount?: string
    receiverAccountDigit?: string
    receiverAgency?: string
    receiverBankName?: string
    receiverCompanyName?: string
    receiverDocument?: string
    recharge?: Recharge
    statement?: Statement
    timeToCheckPaymentInSeconds: number
    timeToExpireInSeconds: number
    txId: string
    value: number
}

export class PaymentRepository extends BaseRepository<Payment> {
    constructor() {
        super(Payment)
    }

    public async create({
        qrCode,
        qrCodeEmvCo,
        receiverAccount,
        receiverAccountDigit,
        receiverAgency,
        receiverBankName,
        receiverCompanyName,
        receiverDocument,
        recharge,
        statement,
        timeToCheckPaymentInSeconds,
        timeToExpireInSeconds,
        txId,
        value
    }: Data): Promise<Payment> {
        const payment = this.repository.create({
            qrCode,
            qrCodeEmvCo,
            receiverAccount,
            receiverAccountDigit,
            receiverAgency,
            receiverBankName,
            receiverCompanyName,
            receiverDocument,
            recharge,
            statement,
            timeToCheckPaymentInSeconds,
            timeToExpireInSeconds,
            txId,
            value
        })

        return await this.repository.save(payment)
    }
}
