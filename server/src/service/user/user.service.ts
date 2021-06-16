import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '../../entity/user/user.entity';
import { UserRegisterDto } from '../../dto/user/user.dto';
import { DateTime } from 'luxon';

@Injectable()
export class UserService {
    async fetchUserInfo(idx: number): Promise<Object> {
        const response = await User.fetchUserInfo(idx);

        return response;
    }

    async findUser(id: string): Promise<Object> {
        const response = await User.findUser(id);

        return response;
    }

    async register(register: UserRegisterDto): Promise<Object> {
        const isDuplicated = await this.findUser(register.id);

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
}
