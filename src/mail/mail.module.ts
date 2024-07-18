import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailTransportModule } from 'src/shared/trasports/mail.transport.module';

@Module({
  imports: [MailTransportModule],
  controllers: [MailController],
})
export class MailModule {}
