import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TerrariumsModule } from './terrariums/terrariums.module';
import { MailModule } from './mail/mail.module';


@Module({
  imports: [AuthModule, TerrariumsModule, MailModule],
  
})
export class AppModule {}
