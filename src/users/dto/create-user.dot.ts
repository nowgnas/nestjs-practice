import { ApiProperty } from '@nestjs/swagger';

export class createUserDto {
  @ApiProperty({
    description: 'id of user',
    type: String,
  })
  id: number;

  @ApiProperty()
  name: string;
}
