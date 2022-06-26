import { Test, TestingModule } from '@nestjs/testing';
import { MicroserviceController } from './microservice.controller';
import { MicroserviceService } from './microservice.service';

describe('MicroserviceController', () => {
  let controller: MicroserviceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicroserviceController],
      providers: [MicroserviceService]
    }).compile();

    controller = module.get<MicroserviceController>(MicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(controller.getHello()).toBe('Hello World!');
    });
  })
});
