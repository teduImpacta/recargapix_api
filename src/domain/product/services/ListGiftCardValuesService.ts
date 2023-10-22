import { inject, injectable } from 'tsyringe'
import { GiftCardValueRepository } from '../repository/GiftCardValueRepository'

@injectable()
export class ListGiftCardValuesService {
    constructor(
        @inject('giftCardValueRepository')
        private readonly repository: GiftCardValueRepository
    ) {}

    async execute(id: string) {
        return await this.repository.list(id)
    }
}
