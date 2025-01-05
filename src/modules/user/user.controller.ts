/* eslint-disable */
import { Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { UserService } from './user.service';

interface queryPayload {
  filter: string;
  limit: number;
}

@Controller('user')
export class UserController {
  constructor(private userService: UserService){}
  @Get()
  findAll(): string {
    return this.userService.findAll();
  }

@Patch(':id')
update(@Param('id') id: string): any {
    return `Meu id é ${id}`;
  }
}
