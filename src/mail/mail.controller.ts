import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { MAIL_SERVICES_NAMES } from './entities';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { EmailDTO } from './dto/email.dto';
import { catchError } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Email')
@Controller('mail')
export class MailController {
  constructor(
    @Inject(MAIL_SERVICES_NAMES.MAIL_SERVICE)
    private readonly _client: ClientProxy,
  ) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async sendEmail(@Body() emailReq: EmailDTO) {
    return await this._client
      .emit({ cmd: MAIL_SERVICES_NAMES.SEND_EMAIL }, emailReq)
      .pipe(
        catchError((err) => {
          throw new RpcException(err);
        }),
      );
  }
}
