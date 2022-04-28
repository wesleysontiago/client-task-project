"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = void 0;
const typeorm_1 = require("typeorm");
const task_entity_1 = require("../entity/task.entity");
exports.TaskSchema = new typeorm_1.EntitySchema({
    name: 'Tasks',
    target: task_entity_1.TaskEntity,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        commentary: {
            type: String,
        },
        createdAt: {
            type: Date,
        },
        updtedAt: {
            type: Date,
        }
    }
});
//# sourceMappingURL=task.schema.js.map