import { Response } from 'express';
import { createTask, updateTask } from '../.dto';
import { TaskEntity } from '../entity/task.entity';
import { TaskService } from '../service/task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    findAll(): Promise<TaskEntity[]>;
    findOne(params: any): Promise<TaskEntity>;
    create(task: createTask): Promise<any>;
    update(id: number, task: updateTask, res: Response): Promise<any>;
    delete(id: number, res: Response): Promise<any>;
}
