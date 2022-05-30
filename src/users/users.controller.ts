import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Next,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiHeader,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { createUserDto } from './dto/create-user.dot';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  @ApiBearerAuth()
  @ApiResponse({
    status: 201,
    description: 'create success',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({ type: createUserDto })
  async insert(@Body() usersDto: createUserDto) {
    await this.userService.insert(usersDto);
  }

  @Get()
  @ApiResponse({ type: [createUserDto] })
  async findAll(@Res() res: any) {
    const users = await this.userService.findAll();
    res.status(HttpStatus.OK).json(users);
  }
}
