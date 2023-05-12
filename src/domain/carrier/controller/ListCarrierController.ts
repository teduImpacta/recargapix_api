import {
    AppError,
    HttpHelper,
    IController,
    IService,
    Request
} from '@/main/common'
import { inject, injectable } from 'tsyringe'

@injectable()
export class ListCarrierController implements IController {
    constructor(
        @inject('listCarrierService')
        private readonly service: IService
    ) {}

    public async handler(req: Request) {
        try {
            const ddd = req.query.ddd

            if (!ddd)
                return HttpHelper.error(
                    new AppError('DDD is missing param!', 400)
                )

            return HttpHelper.ok(await this.service.execute())
        } catch (err) {
            return HttpHelper.error(err)
        }
    }
}
