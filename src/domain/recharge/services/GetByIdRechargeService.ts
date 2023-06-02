import { IService } from '@/main/common'
import { inject, injectable } from 'tsyringe'
import { RechargeRepository } from '../repository/RechargeRepository'
import { Recharge } from '../entity/Recharge'

@injectable()
export class GetByIdRechargeService implements IService {
    constructor(
        @inject('rechargeRepository')
        private readonly repository: RechargeRepository
    ) {}

    public async execute(id: string): Promise<Recharge> {
        return await this.repository.get(id)
    }
}
