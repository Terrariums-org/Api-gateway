import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateLoginDTO {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  passwordUser: string;
}
