import { Module } from '@nestjs/common';
import { ExternalApiController } from './presentation/controllers/external-api.controller';
import { ExternalApiService } from './data/service/external-api.service';

@Module({
  controllers: [ExternalApiController],
  providers: [ExternalApiService]
})
export class ExternalApiModule {}
