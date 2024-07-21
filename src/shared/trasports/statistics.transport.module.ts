import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { configService } from '../dto';
import {
  STATISTICS_QUEUE,
  STATISTICS_SERVICES_NAMES,
} from 'src/statistics/entities';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: STATISTICS_SERVICES_NAMES.STATISTICS_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: configService.get('BROKER_HOST'),
          queue: STATISTICS_QUEUE,
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
        name: STATISTICS_SERVICES_NAMES.STATISTICS_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: configService.get('BROKER_HOST'),
          queue: STATISTICS_QUEUE,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
})
export class StatisticsTransportModule {}
