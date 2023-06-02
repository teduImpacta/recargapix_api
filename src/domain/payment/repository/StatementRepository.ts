import { BaseRepository } from '@/main/common'
import { Statement } from '../entity/Statement'
import { Payment } from '../entity/Payment'

type Data = {
    value: number
    txid: string
    payment: Payment
}

export class StatementRepository extends BaseRepository<Statement> {
    constructor() {
        super(Statement)
    }

    public async create({ payment, txid, value }: Data): Promise<Statement> {
        const statement = this.repository.create({
            value,
            txid,
            payment
        })

        return await this.repository.save(statement)
    }
}
