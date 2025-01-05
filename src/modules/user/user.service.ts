/* eslint-disable */
import { Injectable } from '@nestjs/common';
import { UserRepository } from './user-repository/user-repository';

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository){}
  findAll(): string {
    return this.userRepository.findAll();
  }
}
