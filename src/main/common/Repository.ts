import { EntityTarget, Repository } from 'typeorm'
import { context } from '../database/dataSource'
import { BaseEntity } from '.'

export class BaseRepository<Entity extends BaseEntity> {
    protected repository: Repository<Entity>

    constructor(entity: EntityTarget<Entity>) {
        this.repository = context.getRepository(entity)
    }

    public async list() {
        return await this.repository.find()
    }
}
