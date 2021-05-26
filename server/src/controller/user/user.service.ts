import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUserInfo(): Object {
        return {
            id: 'test',
            pw: '1234'
        };
    }
}
