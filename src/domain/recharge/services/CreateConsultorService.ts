import { AppError, IService } from '@/main/common'
import { inject, injectable } from 'tsyringe'
import {
    ConsultorRepository,
    CreateConsultorData
} from '../repository/ConsultorRepository'

@injectable()
export class CreateConsultorService implements IService {
    constructor(
        @inject('consultorRepository')
        private readonly repository: ConsultorRepository
    ) {}

    public async execute({ number, phone, postalCode }: CreateConsultorData) {
        Object.entries({
            number,
            phone,
            postalCode
        }).forEach(([key, value]) => {
            if ([null, undefined, '', ' '].includes(value)) {
                throw new AppError(`missing field: ${key}`, 400)
            }
        })

        return await this.repository.create({
            number,
            phone,
            postalCode
        })
    }
}
