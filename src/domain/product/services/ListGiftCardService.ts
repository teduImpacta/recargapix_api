import { IService } from '@/main/common'
import { inject, injectable } from 'tsyringe'
import { GiftCardRepository } from '../repository/GiftCardRepository'
import { GiftCard } from '../entity/GiftCard'

@injectable()
export class ListGiftCardService implements IService {
    constructor(
        @inject('giftCardRepository')
        private readonly repository: GiftCardRepository
    ) {}

    public async execute(): Promise<GiftCard[]> {
        return await this.repository.list()
    }
}
