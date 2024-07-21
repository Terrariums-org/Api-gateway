import { Module } from '@nestjs/common';
import { StatisticsController } from './statistics.controller';
import { StatisticsTransportModule } from 'src/shared/trasports';

@Module({
  imports : [StatisticsTransportModule],
  controllers: [StatisticsController],
})
export class StatisticsModule {}
