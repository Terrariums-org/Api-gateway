import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TerrariumsModule } from './terrariums/terrariums.module';


@Module({
  imports: [AuthModule, TerrariumsModule],
  
})
export class AppModule {}
