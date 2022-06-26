import { Module } from '@nestjs/common'
import { TaskController } from './task/presentation/controllers/task.controller'
import { TaskService } from './task/data/service/task.service'
import { TaskModule } from './task/task.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TaskEntity } from './task/domain/entity/task.entity'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { MicroserviceModule } from './microservice/microservice.module';

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
    MicroserviceModule,
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class AppModule {}