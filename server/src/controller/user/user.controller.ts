import { Controller, Get, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('info')
    fetchUserInfo(@Req() request: Request): Object {
        const idx = Number(request.query.idx);

        return this.userService.fetchUserInfo(idx);
    }

}
