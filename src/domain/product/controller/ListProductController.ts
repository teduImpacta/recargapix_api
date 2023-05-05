import { HttpHelper, IController, IService } from '@/main/common'
import { inject, injectable } from 'tsyringe'

@injectable()
export class ListProductController implements IController {
    constructor(
        @inject('listProductService')
        private readonly service: IService
    ) {}

    public async handler() {
        try {
            return HttpHelper.ok(await this.service.execute())
        } catch (err) {
            return HttpHelper.error(err)
        }
    }
}
