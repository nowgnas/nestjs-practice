import { ApiProperty } from '@nestjs/swagger';

export class searchUserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
