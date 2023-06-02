import { AppError, HttpHelper, IController, Request } from '@/main/common'
import { CreatePaymentService } from '../services/CreatePaymentService'
import { inject, injectable } from 'tsyringe'

type Body = {
    rechargeId: string
}

@injectable()
export class CreatePaymentController implements IController {
    constructor(
        @inject('createPaymentService')
        private readonly paymentService: CreatePaymentService
    ) {}

    public async handler(req: Request) {
        try {
            const { rechargeId } = req.body as Body

            if (!rechargeId) throw new AppError('rechargeId is missing', 400)

            return HttpHelper.ok(await this.paymentService.execute(rechargeId))
        } catch (err) {
            return HttpHelper.error(err)
        }
    }
}
