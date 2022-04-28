import { ApiProperty } from '@nestjs/swagger'
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { CommentaryEntity } from './commentary.entity'

@Entity()
export class TaskEntity {

    @ApiProperty({ example: 1, description: 'Task Id' })
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({ example: 'Create application', description: 'Task Title' })
    @Column()
    title: string

    @ApiProperty({ example: 'Wesleyson Tiago', description: 'Who is responsible for task' })
    @Column()
    assignedTo: string

    @ApiProperty({ example: 'Create application with Node JS and SQLite Database', description: 'Task description' })
    @Column()
    description: string

    @OneToMany(() => CommentaryEntity, (commentary: CommentaryEntity) => commentary.task)
    commentary: CommentaryEntity[]

    @ApiProperty({ example: 'Active', description: 'Task State. New, Active, Blocked, [...]' })
    @Column()
    state: string

    @ApiProperty({ example: 'High', description: 'Task severity. High, Medium, Low, [...]' })
    @Column()
    severity: string

    @ApiProperty({ example: 'Technology', description: 'Task Area. Technology, Commercial, [...]' })
    @Column()
    area: string

    @ApiProperty({ example: '2022-04-27T03:20:50.000Z', description: 'Task created in' })
    @CreateDateColumn()
    createdAt: Date

    @ApiProperty({ example: '2022-04-27T03:20:50.000Z', description: 'Task updated in' })
    @UpdateDateColumn()
    updatedAt: Date
}
