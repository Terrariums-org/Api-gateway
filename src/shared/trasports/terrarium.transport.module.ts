import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {
  TERRARIUM_QUEUE,
  TERRARIUM_SERVICES_NAMES,
} from 'src/terrariums/entities';
import { configService } from '../dto';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: TERRARIUM_SERVICES_NAMES.TERRARIUM_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: configService.get('BROKER_HOST'),
          queue: TERRARIUM_QUEUE,
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
        name: TERRARIUM_SERVICES_NAMES.TERRARIUM_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: configService.get('BROKER_HOST'),
          queue: TERRARIUM_QUEUE,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
})
export class TerrariumTransportModule {}
