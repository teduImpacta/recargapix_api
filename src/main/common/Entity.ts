import {
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column
} from 'typeorm'

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn({
        name: 'created_at'
    })
    createdAt: Date

    @UpdateDateColumn({
        name: 'updated_at'
    })
    updatedAt: Date

    @Column({
        name: 'is_active',
        default: true
    })
    isActive: boolean
}
