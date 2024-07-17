import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { RpcCustomExceptionFilter } from './shared/exceptions/rpcCustomException.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('Client-Gateway');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  //config for validations
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  //config for filter
  app.useGlobalFilters(
    //filter for errors
    new RpcCustomExceptionFilter(),
  );
  //swagger
  const config = new DocumentBuilder()
    .setTitle('Nest example')
    .setDescription('The animalitos API description')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token value, without key "Bearer"',
        in: 'header',
      },
      'JWT-auth',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(4300);
  logger.log('Client gateway started on port ' + 4300);
}
bootstrap();
