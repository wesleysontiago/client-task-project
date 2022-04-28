import { Repository } from 'typeorm';
import { createTask, updateTask } from '../.dto';
import { TaskEntity } from '../entity/task.entity';
export declare class TaskService {
    private taskRepository;
    constructor(taskRepository: Repository<TaskEntity>);
    findAll(): Promise<TaskEntity[]>;
    findOne(id: number): Promise<TaskEntity>;
    create(taskNew: createTask): Promise<any>;
    update(taskUpdate: updateTask): Promise<any>;
    remove(id: number): Promise<any>;
}
