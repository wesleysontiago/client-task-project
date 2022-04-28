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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const commentary_entity_1 = require("./commentary.entity");
let TaskEntity = class TaskEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Task Id' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TaskEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Create application', description: 'Task Title' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TaskEntity.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Wesleyson Tiago', description: 'Who is responsible for task' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TaskEntity.prototype, "assignedTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Create application with Node JS and SQLite Database', description: 'Task description' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TaskEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => commentary_entity_1.CommentaryEntity, (commentary) => commentary.task),
    __metadata("design:type", Array)
], TaskEntity.prototype, "commentary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Active', description: 'Task State. New, Active, Blocked, [...]' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TaskEntity.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'High', description: 'Task severity. High, Medium, Low, [...]' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TaskEntity.prototype, "severity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Technology', description: 'Task Area. Technology, Commercial, [...]' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TaskEntity.prototype, "area", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2022-04-27T03:20:50.000Z', description: 'Task created in' }),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TaskEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2022-04-27T03:20:50.000Z', description: 'Task updated in' }),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TaskEntity.prototype, "updatedAt", void 0);
TaskEntity = __decorate([
    (0, typeorm_1.Entity)()
], TaskEntity);
exports.TaskEntity = TaskEntity;
//# sourceMappingURL=task.entity.js.map