import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MensagensService {
    constructor(@Inject('GREETING_SERVICE') private client: ClientProxy){}

    async publishEvent(task: any) {
        this.client.emit('task-created', JSON.stringify(task));
    }
}
