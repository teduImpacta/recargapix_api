import { AppError, HttpHelper, IController, Request } from '@/main/common'
import { inject, injectable } from 'tsyringe'
import { ListGiftCardValuesService } from '../services/ListGiftCardValuesService'

@injectable()
export class ListGiftCardValueController implements IController {
    constructor(
        @inject('listGiftCardValuesService')
        private readonly service: ListGiftCardValuesService
    ) {}

    public async handler(req: Request) {
        try {
            const id = req.params.id

            if (!id)
                return HttpHelper.error(
                    new AppError('GiftCard is missing param!', 400)
                )
            return HttpHelper.ok(await this.service.execute(id))
        } catch (err) {
            return HttpHelper.error(err)
        }
    }
}
