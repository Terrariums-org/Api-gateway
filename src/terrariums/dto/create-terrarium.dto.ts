import {
  IsInt,
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateTerrariumProfileDto } from './create-terrarium_profile.dto';
import { UpdateUserDto } from 'src/auth/dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateTerrariumDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  codeEsp: string;
  @IsInt()
  @IsOptional()
  @ApiProperty()
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => CreateTerrariumProfileDto)
  @ApiProperty()
  terrariumProfile: CreateTerrariumProfileDto;

  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => UpdateUserDto)
  @ApiProperty()
  user: UpdateUserDto;
}
