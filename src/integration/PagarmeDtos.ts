/* eslint-disable @typescript-eslint/no-empty-interface */
export interface CreatePixResponse {
    id: string
    code: string
    amount: number
    currency: string
    closed: boolean
    items: Item[]
    customer: Customer
    shipping: Shipping
    status: string
    created_at: string
    updated_at: string
    closed_at: string
    ip: string
    session_id: string
    device: Device
    location: Location
    charges: Charge[]
    checkouts: unknown[]
}

export interface Item {
    id: string
    description: string
    amount: number
    quantity: number
    status: string
    created_at: string
    updated_at: string
}

export interface Customer {
    id: string
    name: string
    email: string
    document: string
    type: string
    delinquent: boolean
    created_at: string
    updated_at: string
    phones: Phones
}

export interface Phones {}

export interface Shipping {
    amount: number
    description: string
    recipient_name: string
    recipient_phone: string
    address: Address
}

export interface Address {
    city: string
    state: string
    country: string
    zip_code: string
    line_1: string
}

export interface Device {
    platform: string
}

export interface Location {
    latitude: string
    longitude: string
}

export interface Charge {
    id: string
    code: string
    gateway_id: string
    amount: number
    status: string
    currency: string
    payment_method: string
    created_at: string
    updated_at: string
    customer: Customer2
    last_transaction: LastTransaction
}

export interface Customer2 {
    id: string
    name: string
    email: string
    document: string
    type: string
    delinquent: boolean
    created_at: string
    updated_at: string
    phones: Phones2
}

export interface Phones2 {}

export interface LastTransaction {
    id: string
    transaction_type: string
    gateway_id: string
    amount: number
    status: string
    success: boolean
    qr_code: string
    qr_code_url: string
    additional_information: AdditionalInformation[]
    expires_at: string
    created_at: string
    updated_at: string
    gateway_response: GatewayResponse
    antifraud_response: AntifraudResponse
    metadata: Metadata
}

export interface AdditionalInformation {
    name: string
    value: string
}

export interface GatewayResponse {}

export interface AntifraudResponse {}

export interface Metadata {}
