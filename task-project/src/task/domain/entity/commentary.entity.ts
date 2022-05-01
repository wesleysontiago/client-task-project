import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { TaskEntity } from './task.entity'

@Entity()
export class CommentaryEntity {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => TaskEntity, (task: TaskEntity) => task.commentary)
    task: TaskEntity

    @Column()
    commentary: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updtedAt: Date
}
