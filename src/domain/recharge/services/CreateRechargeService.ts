import {
    AppError,
    CreateRechargeDto,
    IService,
    ProductType
} from '@/main/common'
import { inject, injectable } from 'tsyringe'
import { RechargeRepository } from '../repository/RechargeRepository'
import { CarrierRepository } from '@/domain/carrier/repository/CarrierRepository'
import { GiftCardRepository } from '@/domain/product/repository/GiftCardRepository'

@injectable()
export class CreateRechargeService implements IService {
    constructor(
        @inject('rechargeRepository')
        private readonly repository: RechargeRepository,
        @inject('carrierRepository')
        private readonly carrierRepository: CarrierRepository,
        @inject('giftCardRepository')
        private readonly giftCardRepository: GiftCardRepository
    ) {}

    public async execute({
        referenceId,
        phone,
        product,
        value,
        email
    }: CreateRechargeDto): Promise<string> {
        const [missingField] =
            Object.entries({
                referenceId,
                product,
                value
            }).find(
                ([, value]) => typeof value === 'undefined' || value === null
            ) ?? []

        if (missingField)
            throw new AppError(`Missing field: ${missingField}`, 400)

        if (product === ProductType.cellphone) {
            const carrier = await this.carrierRepository.get(referenceId)

            if (!carrier) throw new AppError('Carrier not found', 400)
        }

        if (product === ProductType.store) {
            const giftCard = await this.giftCardRepository.get(referenceId)

            if (!giftCard) throw new AppError('Gift card not found', 400)
        }

        return await this.repository.create({
            phone,
            product,
            value,
            referenceId,
            email
        })
    }
}
