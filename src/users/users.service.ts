import { Inject, Injectable } from '@nestjs/common';
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

  async insert(id: string, name: string) {
    const status = await this.userRepository.create({ id, name });
    return status;
  }
}
