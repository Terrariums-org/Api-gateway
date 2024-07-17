import { Module } from '@nestjs/common';
import { TerrariumsController } from './terrariums.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RABBITMQ_SERVICE } from 'src/shared/constants';
import { configService } from 'src/shared/dto';
import { TERRARIUM_QUEUE } from './entities';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: RABBITMQ_SERVICE,
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
  controllers: [TerrariumsController],
})
export class TerrariumsModule {}
