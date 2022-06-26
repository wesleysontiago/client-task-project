import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './presentation/controllers/task.controller';
import { TaskEntity } from './domain/entity/task.entity';
import { TaskService } from './data/service/task.service';
import { MensagensService } from './data/service/mensagens.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskEntity]),
    ClientsModule.register([{
      name: 'GREETING_SERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'task_queue',
        queueOptions: {
          durable: false
        }
      }
    }])
  ],
  controllers: [TaskController],
  providers: [TaskService, MensagensService]
})
export class TaskModule {}
