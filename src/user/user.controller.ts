import { Body, Controller, Get, Post } from '@nestjs/common';
import {  CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {

    @Post()
    async createUser(@Body() createUserDto : CreateUserDto) {
        return createUserDto;
    }


    @Get()
    async getAllUsers() {
        return JSON.stringify({ test: 'abc' });
    }
}
