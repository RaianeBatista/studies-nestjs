/* eslint-disable */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findAll(): string {
    return 'Lista de users';
  }
}
