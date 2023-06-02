import { AppError, IService, RechargeStatus } from '@/main/common'
import { inject, injectable } from 'tsyringe'
import { RechargeRepository } from '../repository/RechargeRepository'

type Data = {
    id: string
    status: RechargeStatus
}

@injectable()
export class UpdateRechargeStatusService implements IService {
    constructor(
        @inject('rechargeRepository')
        private readonly repository: RechargeRepository
    ) {}

    public async execute({ id, status }: Data) {
        const recharge = await this.repository.get(id)

        if (!recharge) throw new AppError('Recharga não encontrada', 400)

        await this.repository.save({
            ...recharge,
            status
        })

        return id
    }
}
