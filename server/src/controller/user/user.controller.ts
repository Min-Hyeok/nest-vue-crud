import { Body, Controller, Get, Post, Req } from '@nestjs/common';
// import { UserService } from './user.service';
import { UserService } from '../../service/user/user.service';
import { Request } from 'express';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { UserInfoDto, UserRegisterDto, UserLoginDto } from '../../dto/user/user.dto';

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

    @Post('register')
    @ApiOperation({ summary: '회원가입', description: '입력받은 정보를 바탕으로 회원가입을 한다' })
    @ApiCreatedResponse({ type: UserRegisterDto })
    register(@Body() register: UserRegisterDto) {

        return this.userService.register(register);
    }

    @Post('login')
    @ApiOperation({ summary: '로그인', description: '입력받은 정보를 바탕으로 로그인을 한다' })
    @ApiCreatedResponse({ type: UserLoginDto })
    login(@Body() login: UserLoginDto) {

        return this.userService.login(login);
    }

}
