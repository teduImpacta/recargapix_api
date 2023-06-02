import {
    AppError,
    CreateRechargeDto,
    HttpHelper,
    IController,
    Request
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

            if (!this.isValidPhone(phone))
                throw new AppError('Informe um telefone válido', 400)

            return HttpHelper.ok(
                await this.createRechargeService.execute({
                    carrierId,
                    phone: this.onlyDigits(phone),
                    product,
                    value
                })
            )
        } catch (err) {
            return HttpHelper.error(err)
        }
    }

    private isValidPhone(phone: string) {
        const phoneLengthWithDddAndPrefix = 13

        if (
            !phone ||
            typeof phone !== 'string' ||
            this.onlyDigits(phone).length !== phoneLengthWithDddAndPrefix
        )
            return false
        return true
    }

    private onlyDigits(value: unknown) {
        return String(value).replace(/\^[0-9]/g, '')
    }
}
