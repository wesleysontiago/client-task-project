import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { SwaggerModule, DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { MicroserviceModule } from './microservice/microservice.module'

async function bootstrap() {
  const microservice = await NestFactory.createMicroservice(MicroserviceModule, {
    transport: Transport.TCP,
  })
  await microservice.listen()

  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Task Project example')
    .setDescription('The task project API description')
    .setVersion('1.0')
    .build();

  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'My API Docs',
  };
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, customOptions);
  await app.listen(3000)
}
bootstrap()
