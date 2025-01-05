/* eslint-disable */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  findAll(): string {
    return 'My user from db';
  }
}
