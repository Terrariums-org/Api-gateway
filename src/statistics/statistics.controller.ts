import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { STATISTICS_SERVICES_NAMES } from './entities';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Statistics')
@Controller('statistics')
export class StatisticsController {
  constructor(
    @Inject(STATISTICS_SERVICES_NAMES.STATISTICS_SERVICE)
    private readonly _client: ClientProxy,
  ) {}

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getStatistics(@Param('id', ParseIntPipe) terrariumId: number) {
    return await this._client
      .send({ cmd: STATISTICS_SERVICES_NAMES.GET_STATISTICS }, terrariumId)
      .pipe(
        catchError((err) => {
          throw new RpcException(err);
        }),
      );
  }
}
