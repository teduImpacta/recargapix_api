import { BaseRepository } from '@/main/common'
import { GiftCard } from '../entity/GiftCard'

export class GiftCardRepository extends BaseRepository<GiftCard> {
    constructor() {
        super(GiftCard)
    }
}
