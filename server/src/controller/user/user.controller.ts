import { Controller, Get, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiParamOptions } from '@nestjs/swagger';
import { UserInfoDto } from './dto/user.dto';

@Controller('api/user')
@ApiTags('사용자 API')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('info')
    @ApiOperation({ summary: '사용자 정보 조회', description: '사용자 정보 (이름, 이메일 등)을 조회해 온다' })
    @ApiCreatedResponse({ type: UserInfoDto })
    fetchUserInfo(@Req() request: Request): Object {
        const idx = Number(request.query.idx);

        return this.userService.fetchUserInfo(idx);
    }

}
