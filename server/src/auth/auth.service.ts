import { Injectable } from '@nestjs/common';
import { UserService } from '../service/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserLoginDto } from '../dto/user/user.dto';

@Injectable()
export class AuthService {
    
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async validateUser(id: string, password: string): Promise<Object>{
        const user = await this.userService.findUser({id, password});

        if (user) {
            return user;
        }

        return null;
    }

    async login(user: UserLoginDto): Promise<Object> {
        const userInfo = await this.userService.login(user);

        return {
            access_token: this.jwtService.sign({
                ...userInfo,
                password: null
            })
        };
    }

}
