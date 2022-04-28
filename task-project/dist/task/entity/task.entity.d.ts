import { CommentaryEntity } from './commentary.entity';
export declare class TaskEntity {
    id: number;
    title: string;
    assignedTo: string;
    description: string;
    commentary: CommentaryEntity[];
    state: string;
    severity: string;
    area: string;
    createdAt: Date;
    updatedAt: Date;
}
