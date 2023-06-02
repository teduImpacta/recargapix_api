/* eslint-disable @typescript-eslint/no-explicit-any */
import { EntityTarget, Repository } from 'typeorm'
import { context } from '../database/dataSource'
import { BaseEntity } from '.'

export class BaseRepository<Entity extends BaseEntity> {
    protected repository: Repository<Entity>

    constructor(entity: EntityTarget<Entity>) {
        this.repository = context.getRepository(entity)
    }

    public async list(where?: any) {
        return await this.repository.find(where)
    }

    public async get(id: string): Promise<Entity | undefined> {
        return await this.repository.findOne({
            where: {
                id
            } as any
        })
    }
}
