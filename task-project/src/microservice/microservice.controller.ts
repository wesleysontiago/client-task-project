import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller('microservice')
export class MicroserviceController {
    constructor() {}

    @EventPattern('message_printed')
    async handleMessagePrinted(data: Record<string, unknown>) {
        console.log(data.text);
    }
}
