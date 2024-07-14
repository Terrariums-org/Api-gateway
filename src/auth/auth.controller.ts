import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { RABBITMQ_SERVICE } from 'src/shared/constants';
import { AUTH_SERVICES_NAMES } from './entities/AuthServicesNames';
import { CreateLoginDTO, CreateUserDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(@Inject(RABBITMQ_SERVICE) private readonly client: ClientProxy) {}

  @Post('login')
  @HttpCode(HttpStatus.ACCEPTED)
  async login(@Body() createLoginReq: CreateLoginDTO) {
    return await this.client
      .send({ cmd: AUTH_SERVICES_NAMES.LOGIN_USER }, createLoginReq)
      .pipe(
        catchError((err) => {
          throw new RpcException(err);
        }),
      );
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() createUserReq: CreateUserDto) {
    return await this.client
      .send({ cmd: AUTH_SERVICES_NAMES.REGISTER_USER }, createUserReq)
      .pipe(
        catchError((err) => {
          throw new RpcException(err);
        }),
      );
  }
}
