import { Controller, Get, Post } from '@nestjs/common';
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
}
