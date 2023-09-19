import {
    AppError,
    CreateRechargeDto,
    HttpHelper,
    IController,
    Request,
    isValidPhone,
    onlyDigits
} from '@/main/common'
import { CreateRechargeService } from '../services/CreateRechargeService'
import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateRechargeController implements IController {
    constructor(
        @inject('createRechargeService')
        private readonly createRechargeService: CreateRechargeService
    ) {}

    public async handler(req: Request) {
        try {
            const { carrierId, phone, product, value } =
                req.body as CreateRechargeDto

            if (!isValidPhone(phone))
                throw new AppError('Informe um telefone válido', 400)

            return HttpHelper.ok(
                await this.createRechargeService.execute({
                    carrierId,
                    phone: onlyDigits(phone),
                    product,
                    value
                })
            )
        } catch (err) {
            return HttpHelper.error(err)
        }
    }
}
