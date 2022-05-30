import {
  Controller,
  Get,
  HttpStatus,
  Next,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async insert() {
    const id = '22';
    const name = 'lee';
    await this.userService.insert(id, name);
  }

  @Get()
  async findAll(@Res() res: any) {
    const users = await this.userService.findAll();
    res.status(HttpStatus.OK).json(users);
  }
}
