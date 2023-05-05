import { BaseEntity } from './Entity'

export type Filters<Entity extends BaseEntity> = Partial<{
    page: number
    size: number
    orderby: keyof Entity
}>
