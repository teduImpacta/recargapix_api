import { Recharge } from '../../recharge/entity/Recharge'
import { BaseEntity } from '../../../main/common'
import { Column, Entity, OneToOne } from 'typeorm'
import { Statement } from './Statement'

@Entity()
export class Payment extends BaseEntity {
    @OneToOne(() => Recharge, recharge => recharge.payment, {
        onDelete: 'SET NULL'
    })
    recharge: Recharge

    @OneToOne(() => Statement, statement => statement.payment, {
        onDelete: 'CASCADE',
        nullable: true
    })
    statement?: Statement

    @Column({
        name: 'time_to_expire_in_seconds'
    })
    timeToExpireInSeconds: number

    @Column({
        name: 'time_to_check_payment_in_seconds'
    })
    timeToCheckPaymentInSeconds: number

    @Column()
    value: number

    @Column({
        name: 'receiver_company_name',
        nullable: true
    })
    receiverCompanyName: string

    @Column({
        name: 'receiver_document',
        nullable: true
    })
    receiverDocument: string

    @Column({
        name: 'receiver_bank_name',
        nullable: true
    })
    receiverBankName: string

    @Column({
        name: 'receiver_agency',
        nullable: true
    })
    receiverAgency: string

    @Column({
        name: 'receiver_account',
        nullable: true
    })
    receiverAccount: string

    @Column({
        name: 'receiver_account_digit',
        nullable: true
    })
    receiverAccountDigit: string

    @Column({
        name: 'tx_id'
    })
    txId: string

    @Column({
        name: 'qr_code_emv_co'
    })
    qrCodeEmvCo: string

    @Column({
        name: 'qr_code'
    })
    qrCode: string
}
