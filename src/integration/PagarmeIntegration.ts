import { internals } from '@/main/config/internals'
import axios from 'axios'
import { CreatePixResponse } from './PagarmeDtos'

const api = axios.create({
    baseURL: internals.pagarmeUrl,
    headers: {
        Authorization: `Basic ${Buffer.from(internals.pagarmeKey).toString(
            'base64'
        )}`
    }
})

type CreatePixData = {
    value: number
}

export class PagarmeIntegration {
    public async payWithPix({ value }: CreatePixData) {
        return await api.post<CreatePixResponse>('/orders', {
            customer: {
                name: 'Pharmy'
            },
            payments: [
                {
                    Pix: {
                        additional_information: {
                            Name: 'Recarga pix',
                            Value: String(value)
                        },
                        expires_in: 180
                    }
                }
            ]
        })
    }
}
