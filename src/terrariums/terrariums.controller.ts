import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RABBITMQ_SERVICE } from 'src/shared/constants';
import { TERRARIUM_SERVICES_NAMES } from './entities';
import { catchError } from 'rxjs';
import { CreateTerrariumDto } from './dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@ApiTags('Terrariums')
// @UseGuards(AuthGuard)
// @ApiBearerAuth('JWT-auth')
@Controller('terrariums')
export class TerrariumsController {
  constructor(
    @Inject(RABBITMQ_SERVICE) private readonly _client: ClientProxy,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createTerrariumDto: CreateTerrariumDto) {
    return await this._client
      .send(
        { cmd: TERRARIUM_SERVICES_NAMES.createTerrarium },
        createTerrariumDto,
      )
      .pipe(
        catchError((err) => {
          throw new RpcException(err);
        }),
      );
  }

  @Get('/user/:id')
  @HttpCode(HttpStatus.OK)
  async findAllByUser(@Param('id', ParseIntPipe) id: number) {
    return await this._client
      .send({ cmd: TERRARIUM_SERVICES_NAMES.findAllByUser }, id)
      .pipe(
        catchError((err) => {
          throw new RpcException(err);
        }),
      );
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this._client
      .send({ cmd: TERRARIUM_SERVICES_NAMES.findOne }, id)
      .pipe(
        catchError((err) => {
          throw new RpcException(err);
        }),
      );
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this._client
      .send({ cmd: TERRARIUM_SERVICES_NAMES.delete }, id)
      .pipe(
        catchError((err) => {
          throw new RpcException(err);
        }),
      );
  }
}
