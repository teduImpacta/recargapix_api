import { BaseRepository } from '@/main/common'
import { GiftCardValue } from '../entity/GiftCardValue'

export class GiftCardValueRepository extends BaseRepository<GiftCardValue> {
    constructor() {
        super(GiftCardValue)
    }

    public override async list(id: string): Promise<GiftCardValue[]> {
        return await this.repository.find({ where: { giftcard: { id } } })
    }
}
