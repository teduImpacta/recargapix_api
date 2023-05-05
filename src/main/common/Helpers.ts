import { InjectionToken, container } from 'tsyringe'
import { Response, Request, Router } from 'express'
import { AppError, IController, Response as Res } from '.'

export abstract class HttpHelper {
    static ok<Data>(data: Data, code = 200) {
        return this.response(data, code)
    }

    static error<T extends AppError>(error: T) {
        return this.response(error, error.code)
    }

    static response<Data>(data: Data, status: number): Res<Data> {
        console.log(status, data)
        return {
            status,
            data
        }
    }
}

export abstract class RouterHelper {
    static adapter(token: InjectionToken) {
        const controller = container.resolve<IController>(token)
        return async (req: Request, res: Response) => {
            const { data, status } = await controller.handler(req)
            return res.status(status).send({
                data
            })
        }
    }

    static route(adapter: (router: Router) => void) {
        return adapter
    }
}
