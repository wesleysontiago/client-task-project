"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const _dto_1 = require("../.dto");
const task_entity_1 = require("../entity/task.entity");
const task_service_1 = require("../service/task.service");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    findAll() {
        return this.taskService.findAll();
    }
    findOne(params) {
        return this.taskService.findOne(params.id);
    }
    create(task) {
        return this.taskService.create(task);
    }
    async update(id, task, res) {
        const getTask = await this.findOne(id);
        if (getTask) {
            task.id = getTask.id;
            task.updatedAt = new Date();
            task.createdAt = getTask.createdAt;
            const upTask = await this.taskService.update(task);
            return res.status(common_1.HttpStatus.OK).json(upTask);
        }
        else {
            return res.status(common_1.HttpStatus.NOT_FOUND).send();
        }
    }
    async delete(id, res) {
        const deleteTask = await this.taskService.remove(id);
        if (deleteTask.affected > 0)
            return res.status(common_1.HttpStatus.OK).send();
        else
            return res.status(common_1.HttpStatus.NOT_FOUND).send();
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Find All Tasks' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Find all tasks in application', type: task_entity_1.TaskEntity }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({ name: 'Id', required: true, description: 'Should be an id of a task that exists in the database', type: Number }),
    (0, swagger_1.ApiOperation)({ summary: 'Find One Task' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Find one Task in application', type: task_entity_1.TaskEntity }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create Task' }),
    (0, swagger_1.ApiBody)({ type: _dto_1.createTask }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Create Task', type: task_entity_1.TaskEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_dto_1.createTask]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update Task' }),
    (0, swagger_1.ApiParam)({ name: 'Id', required: true, type: Number }),
    (0, swagger_1.ApiBody)({ type: _dto_1.updateTask }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Update Task', type: task_entity_1.TaskEntity }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, _dto_1.updateTask, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete Task' }),
    (0, swagger_1.ApiParam)({ name: 'Id', required: true, type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Delete Task' }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "delete", null);
TaskController = __decorate([
    (0, common_1.Controller)('task'),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map