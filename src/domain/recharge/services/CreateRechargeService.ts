import { AppError, CreateRechargeDto, IService } from '@/main/common'
import { inject, injectable } from 'tsyringe'
import { RechargeRepository } from '../repository/RechargeRepository'
import { CarrierRepository } from '@/domain/carrier/repository/CarrierRepository'

@injectable()
export class CreateRechargeService implements IService {
    constructor(
        @inject('rechargeRepository')
        private readonly repository: RechargeRepository,
        @inject('carrierRepository')
        private readonly carrierRepository: CarrierRepository
    ) {}

    public async execute({
        carrierId,
        phone,
        product,
        value
    }: CreateRechargeDto): Promise<string> {
        const [missingField] =
            Object.entries({
                carrierId,
                phone,
                product,
                value
            }).find(
                ([, value]) => typeof value === 'undefined' || value === null
            ) ?? []

        if (missingField)
            throw new AppError(`Missing field: ${missingField}`, 400)

        const carrier = await this.carrierRepository.get(carrierId)

        if (!carrier) throw new AppError('Carrier not found', 400)

        return await this.repository.create({
            carrier,
            phone,
            product,
            value
        })
    }
}
