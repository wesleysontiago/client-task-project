"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const task_service_1 = require("./task.service");
describe('TaskService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [task_service_1.TaskService],
        }).compile();
        service = module.get(task_service_1.TaskService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=task.service.spec%202.js.map