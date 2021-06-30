import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '../../entity/user/user.entity';
import { UserRegisterDto, UserLoginDto } from '../../dto/user/user.dto';
import { DateTime } from 'luxon';

@Injectable()
export class UserService {
    async fetchUserInfo(idx: number): Promise<Object> {
        const response = await User.fetchUserInfo(idx);

        return response;
    }

    async confirmId(id: string): Promise<Object> {
        const response = await User.confirmId(id);

        return response;
    }

    async findUser(user: UserLoginDto): Promise<Object> {
        const userInfo = await User.findUser(user);

        return userInfo;
    }

    async register(register: UserRegisterDto): Promise<Object> {
        const isDuplicated = await this.confirmId(register.id);

        if (isDuplicated) {
            throw new HttpException('중복된 아이디 입니다.', HttpStatus.BAD_REQUEST);
        }

        const params = {
            ...register,
            regdate: DateTime.now(),
            logindate: DateTime.now()
        };

        const response = await User.register(params);

        return response;
    }

    async login(login: UserLoginDto): Promise<Object> {
        const userInfo = await this.findUser(login);

        if (!userInfo) {
            throw new HttpException('아이디 또는 비밀번호가 일치하지 않습니다.', HttpStatus.BAD_REQUEST);
        }

        return userInfo;
    }
}
