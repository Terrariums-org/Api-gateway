import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateUserProfile } from './create-user_profile';

export class CreateUserDto {
  @IsInt()
  @IsOptional()
  id?: number;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  passwordUser: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ValidateNested()
  @IsNotEmpty()
  @IsNotEmptyObject()
  userProfile: CreateUserProfile;
}
