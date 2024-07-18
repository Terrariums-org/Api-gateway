import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class EmailDTO {
  @IsString()
  @ApiProperty()
  to: string;
  @IsString()
  @ApiProperty()
  subject: string;
  @IsString()
  @ApiProperty()
  body: string;
}
