import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TerrariumsModule } from './terrariums/terrariums.module';
import { MailModule } from './mail/mail.module';
import { StatisticsModule } from './statistics/statistics.module';


@Module({
  imports: [AuthModule, TerrariumsModule, MailModule, StatisticsModule],
  
})
export class AppModule {}
