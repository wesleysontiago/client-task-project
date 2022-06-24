import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './presentation/controllers/task.controller';
import { TaskEntity } from './domain/entity/task.entity';
import { TaskService } from './data/service/task.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
