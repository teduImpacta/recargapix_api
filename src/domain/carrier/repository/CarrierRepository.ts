import { BaseRepository } from '@/main/common'
import { Carrier } from '../entity/Carrier'

export class CarrierRepository extends BaseRepository<Carrier> {
    constructor() {
        super(Carrier)
    }

    public override async list(ddd: string) {
        return await this.repository.find({
            where: {
                ddd
            }
        })
    }
}
