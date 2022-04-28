"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const commentary_service_service_1 = require("./commentary.service.service");
describe('Commentary.ServiceService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [commentary_service_service_1.Commentary.ServiceService],
        }).compile();
        service = module.get(commentary_service_service_1.Commentary.ServiceService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=commentary.service.service.spec%202.js.map