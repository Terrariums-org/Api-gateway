import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { RpcCustomExceptionFilter } from './shared/exceptions/rpcCustomException.filter';

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
  await app.listen(3000);

  logger.log('Client gateway started on port ' + 3000);
}
bootstrap();
