import { AppError, IService } from '@/main/common'
import { inject, injectable } from 'tsyringe'
import { CarrierRepository } from '../repository/CarrierRepository'

@injectable()
export class ListCarrierByDddService implements IService {
    constructor(
        @inject('carrierRepository')
        private readonly repository: CarrierRepository
    ) {}

    public async execute(ddd: string) {
        try {
            return await this.repository.list(ddd)
        } catch (err) {
            return new AppError(err, 500)
        }
    }
}
