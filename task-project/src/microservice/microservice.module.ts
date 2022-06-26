import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MicroserviceController } from './microservice.controller';
import { MicroserviceService } from './microservice.service';

@Module({
    imports: [],
    controllers: [MicroserviceController],
    providers: [MicroserviceService]
})
export class MicroserviceModule {}
