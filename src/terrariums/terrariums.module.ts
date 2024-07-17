import { Module } from '@nestjs/common';
import { TerrariumsController } from './terrariums.controller';
import {
  AuthTransportModule,
  TerrariumTransportModule,
} from 'src/shared/trasports';

@Module({
  imports: [AuthTransportModule, TerrariumTransportModule],
  controllers: [TerrariumsController],
})
export class TerrariumsModule {}
