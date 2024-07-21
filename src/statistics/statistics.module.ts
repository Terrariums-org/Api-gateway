import { Module } from '@nestjs/common';
import { StatisticsController } from './statistics.controller';
import {
  AuthTransportModule,
  StatisticsTransportModule,
} from 'src/shared/trasports';

@Module({
  imports: [AuthTransportModule, StatisticsTransportModule],
  controllers: [StatisticsController],
})
export class StatisticsModule {}
