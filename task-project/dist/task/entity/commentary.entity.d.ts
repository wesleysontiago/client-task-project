import { TaskEntity } from './task.entity';
export declare class CommentaryEntity {
    id: number;
    task: TaskEntity;
    commentary: string;
    createdAt: Date;
    updtedAt: Date;
}
