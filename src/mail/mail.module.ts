import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailTransportModule } from 'src/shared/trasports/mail.transport.module';
import { AuthTransportModule } from 'src/shared/trasports';

@Module({
  imports: [AuthTransportModule, MailTransportModule],
  controllers: [MailController],
})
export class MailModule {}
