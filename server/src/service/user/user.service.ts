import { Injectable } from '@nestjs/common';
// import { User } from './entity/user.entity';
import { User } from '../../entity/user/user.entity';

@Injectable()
export class UserService {
    async fetchUserInfo(idx: number): Promise<Object> {
        const response = await User.fetchUserInfo(idx);

        return response;
    }
}
