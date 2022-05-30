import { Inject, Injectable } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dot';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private userRepository: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    const users = this.userRepository.findAll<User>();
    return users;
  }

  async insert(userDto: createUserDto) {
    console.log(userDto);

    const status = await this.userRepository.create({ ...userDto });
    return status;
  }
}
