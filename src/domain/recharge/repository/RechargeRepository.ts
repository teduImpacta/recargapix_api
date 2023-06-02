import { BaseRepository, ProductType, RechargeStatus } from '@/main/common'
import { Recharge } from '../entity/Recharge'
import { Carrier } from '@/domain/carrier/entity/Carrier'

type CreateRecharge = {
    value: number
    carrier: Carrier
    phone: string
    product: ProductType
}

export class RechargeRepository extends BaseRepository<Recharge> {
    constructor() {
        super(Recharge)
    }

    public async create({
        carrier,
        phone,
        product,
        value
    }: CreateRecharge): Promise<string> {
        const recharge = this.repository.create({
            phone,
            product,
            value,
            carrier,
            status: RechargeStatus.pending
        })

        return (await this.save(recharge))?.id
    }

    public async save(recharge: Recharge) {
        return await this.repository.save(recharge)
    }
}
