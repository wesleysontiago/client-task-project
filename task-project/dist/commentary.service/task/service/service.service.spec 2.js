"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const service_service_1 = require("./service.service");
describe('ServiceService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [service_service_1.ServiceService],
        }).compile();
        service = module.get(service_service_1.ServiceService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=service.service.spec%202.js.map