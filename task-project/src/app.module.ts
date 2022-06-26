import { Module } from '@nestjs/common'
import { TaskController } from './task/presentation/controllers/task.controller'
import { TaskService } from './task/data/service/task.service'
import { TaskModule } from './task/task.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TaskEntity } from './task/domain/entity/task.entity'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { MensagensService } from './task/data/service/mensagens.service'

@Module({
  imports: [
    TaskModule,
    TypeOrmModule.forFeature([TaskEntity]),
    TypeOrmModule.forRoot({
      type :"sqlite",
      database: "tasks.sqlite",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
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
  providers: [TaskService, MensagensService],
})
export class AppModule {}