import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthTransportModule } from 'src/shared/trasports/auth.transport.module';

@Module({
  imports: [AuthTransportModule],
  controllers: [AuthController],
})
export class AuthModule {}
