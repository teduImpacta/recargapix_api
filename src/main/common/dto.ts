import { BaseEntity } from './Entity'
import { ProductType } from './enums'

export type Filters<Entity extends BaseEntity> = Partial<{
    page: number
    size: number
    orderby: keyof Entity
}>

export type CreateRechargeDto = {
    value: number
    carrierId: string
    phone: string
    product: ProductType
}

export type CreateStatementDto = {
    value: number
    txid: string
    paymentId: string
}

export type CreatePaymentDto = {
    qrCode: string
    qrCodeEmvCo: string
    txId: string
    value: number
    timeToExpireInSeconds: number
    timeToCheckPaymentInSeconds: number
    receiverAccountDigit?: string
    receiverAccount?: string
    receiverAgency?: string
    receiverBankName?: string
    receiverDocument?: string
    receiverCompanyName?: string
}
