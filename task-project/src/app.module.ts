import { Module } from '@nestjs/common'
import { TaskController } from './task/controllers/task.controller'
import { TaskService } from './task/service/task.service'
import { TaskModule } from './task/task.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './task/entity/task.entity'

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
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class AppModule {}