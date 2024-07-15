import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AUTH_QUEUE, RABBITMQ_SERVICE } from 'src/shared/constants';
import { configService } from 'src/shared/dto';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: RABBITMQ_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: configService.get('BROKER_HOST'),
          queue: AUTH_QUEUE,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
