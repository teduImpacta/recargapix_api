import { BaseRepository } from '@/main/common'
import { Consultor } from '../entity/Consultor'

export type CreateConsultorData = Pick<
    InstanceType<typeof Consultor>,
    'phone' | 'number' | 'postalCode'
>

export class ConsultorRepository extends BaseRepository<Consultor> {
    constructor() {
        super(Consultor)
    }

    public async create({
        number,
        phone,
        postalCode
    }: CreateConsultorData): Promise<string> {
        const consultor = this.repository.create({
            number,
            phone,
            postalCode
        })

        return (await this.repository.save(consultor)).id
    }
}
