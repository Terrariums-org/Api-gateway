import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { configService } from '../dto';
import { AUTH_QUEUE } from 'src/auth/entities/AUTH_QUEUE';
import { AUTH_SERVICES_NAMES } from 'src/auth/entities/AuthServicesNames';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: AUTH_SERVICES_NAMES.AUTH_SERVICE,
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
  exports: [
    ClientsModule.register([
      {
        name: AUTH_SERVICES_NAMES.AUTH_SERVICE,
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
})
export class AuthTransportModule {}
