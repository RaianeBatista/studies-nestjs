/* eslint-disable */
import { Controller, Get, Param, Patch, Query } from '@nestjs/common';

interface queryPayload {
  filter: string;
  limit: number;
}

@Controller('user')
export class UserController {
  @Get()
  findAll(@Query() query: queryPayload): any {
    return query;
  }

@Patch(':id')
update(@Param('id') id: string): any {
    return `Meu id é ${id}`;
  }
}
