import {
    AppError,
    CreateRechargeDto,
    HttpHelper,
    IController,
    ProductType,
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
            const { referenceId, phone, product, value, email } =
                req.body as CreateRechargeDto

            if (product === ProductType.cellphone && !isValidPhone(phone))
                throw new AppError('Informe um telefone válido', 400)

            if (product === ProductType.store && !(email || phone))
                throw new AppError('Informe um telefone ou email', 400)

            return HttpHelper.ok(
                await this.createRechargeService.execute({
                    referenceId,
                    phone: onlyDigits(phone),
                    product,
                    value,
                    email
                })
            )
        } catch (err) {
            return HttpHelper.error(err)
        }
    }
}
