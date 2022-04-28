import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common'
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiResponseProperty, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import { createTask, updateTask } from '../.dto'
import { TaskEntity } from '../entity/task.entity'
import { TaskService } from '../service/task.service'

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get()
    @ApiOperation({ summary: 'Find All Tasks' })
    @ApiResponse({ status: 200, description: 'Find all tasks in application', type: TaskEntity })
    findAll(): Promise<TaskEntity[]> {
        return this.taskService.findAll()
    }

    @Get(':id')
    @ApiParam({ name: 'Id', required: true, description: 'Should be an id of a task that exists in the database', type: Number })
    @ApiOperation({ summary: 'Find One Task' })
    @ApiResponse({ status: 200, description: 'Find one Task in application', type: TaskEntity })
    findOne(@Param() params): Promise<TaskEntity> {
        return this.taskService.findOne(params.id)
    }

    @Post()
    @ApiOperation({ summary: 'Create Task' })
    @ApiBody({ type: createTask })
    @ApiResponse({ status: 200, description: 'Create Task', type: TaskEntity })
    create(@Body() task: createTask): Promise<any> {
        return this.taskService.create(task)
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update Task' })
    @ApiParam({ name: 'Id', required: true, type: Number })
    @ApiBody({ type: updateTask })
    @ApiResponse({ status: 200, description: 'Update Task', type: TaskEntity })
    async update(@Param() id: number, @Body() task: updateTask, @Res() res: Response): Promise<any> {
        const getTask = await this.findOne(id)
        if (getTask) {
            task.id = getTask.id
            task.updatedAt = new Date()
            task.createdAt = getTask.createdAt
            const upTask = await this.taskService.update(task)
            return res.status(HttpStatus.OK).json(upTask)
        } else {
            return res.status(HttpStatus.NOT_FOUND).send()
        }
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete Task' })
    @ApiParam({ name: 'Id', required: true, type: Number })
    @ApiResponse({ status: 200, description: 'Delete Task' })
    async delete(@Param() id: number, @Res() res: Response): Promise<any> {
        const deleteTask = await this.taskService.remove(id)
        if (deleteTask.affected > 0)
            return res.status(HttpStatus.OK).send()
        else
            return res.status(HttpStatus.NOT_FOUND).send()
    }
}
