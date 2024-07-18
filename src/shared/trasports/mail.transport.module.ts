import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { configService } from '../dto';
import { MAIL_QUEUE, MAIL_SERVICES_NAMES } from 'src/mail/entities';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MAIL_SERVICES_NAMES.MAIL_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: configService.get('BROKER_HOST'),
          queue: MAIL_QUEUE,
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
        name: MAIL_SERVICES_NAMES.MAIL_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: configService.get('BROKER_HOST'),
          queue: MAIL_QUEUE,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
})
export class MailTransportModule {}
