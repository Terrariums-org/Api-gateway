import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserProfile } from './create-user_profile';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsInt()
  @IsOptional()
  @ApiProperty()
  id?: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  passwordUser: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @IsEmail()
  email: string;

  @ValidateNested()
  @IsNotEmpty()
  @IsNotEmptyObject()
  @Type(() => CreateUserProfile)
  @ApiProperty()
  userProfile: CreateUserProfile;
}
