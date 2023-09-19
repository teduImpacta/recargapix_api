import {
    AppError,
    HttpHelper,
    IController,
    Request,
    Response,
    isValidPhone,
    onlyDigits
} from '@/main/common'
import { inject, injectable } from 'tsyringe'
import { CreateConsultorData } from '../repository/ConsultorRepository'
import { CreateConsultorService } from '../services/CreateConsultorService'

@injectable()
export class CreateConsultorController implements IController {
    constructor(
        @inject('createConsultorService')
        private readonly createConsultorService: CreateConsultorService
    ) {}

    public async handler(req: Request): Promise<Response<string>> {
        try {
            const { number, phone, postalCode } =
                req.body as CreateConsultorData

            if (!isValidPhone(phone))
                throw new AppError('Informe um telefone válido', 400)

            return HttpHelper.ok(
                await this.createConsultorService.execute({
                    number,
                    phone: onlyDigits(phone),
                    postalCode: onlyDigits(postalCode)
                })
            )
        } catch (err) {
            return HttpHelper.error(err)
        }
    }
}
