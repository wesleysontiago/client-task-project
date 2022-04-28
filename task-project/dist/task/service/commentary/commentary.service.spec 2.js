"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const commentary_service_1 = require("./commentary.service");
describe('CommentaryService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [commentary_service_1.CommentaryService],
        }).compile();
        service = module.get(commentary_service_1.CommentaryService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=commentary.service.spec%202.js.map