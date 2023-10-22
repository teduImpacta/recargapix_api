import { BaseRepository, ProductType, RechargeStatus } from '@/main/common'
import { Recharge } from '../entity/Recharge'

type CreateRecharge = {
    value: number
    phone?: string
    email?: string
    product: ProductType
    referenceId: string
}

export class RechargeRepository extends BaseRepository<Recharge> {
    constructor() {
        super(Recharge)
    }

    public async create({
        phone,
        product,
        value,
        referenceId,
        email
    }: CreateRecharge): Promise<string> {
        const recharge = this.repository.create({
            phone,
            product,
            value,
            status: RechargeStatus.pending,
            email,
            referenceId
        })

        return (await this.save(recharge))?.id
    }

    public async save(recharge: Recharge) {
        return await this.repository.save(recharge)
    }
}
