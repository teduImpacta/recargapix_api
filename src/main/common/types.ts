import { Request as ExpressRequest } from 'express'

export type Response<Data> = {
    status: number
    data: Data
}

export interface IController {
    handler: (...rest: unknown[]) => Promise<Response<unknown>>
}

export interface IService {
    execute: (...rest: unknown[]) => Promise<unknown>
}

export type Request = ExpressRequest
