import { ApiPropertyOptional } from '@nestjs/swagger';

export class UserInfoDto {
    @ApiPropertyOptional({ description: '사용자 고유 번호' })
    idx: number;

    @ApiPropertyOptional({ description: '사용자 id' })
    id: string;

    @ApiPropertyOptional({ description: '사용자 이름' })
    name: string;

    @ApiPropertyOptional({ description: '사용자 이메일' })
    email: string;

    @ApiPropertyOptional({ description: '최초 가입일' })
    regdate: string;

    @ApiPropertyOptional({ description: '마지막으로 로그인 한 날짜' })
    logindate: string;
}

export class UserRegisterDto {
    @ApiPropertyOptional({ description: '사용자 id' })
    id: string;

    @ApiPropertyOptional({ description: '사용자 password' })
    password: string;

    @ApiPropertyOptional({ description: '사용자 이름' })
    name: string;

    @ApiPropertyOptional({ description: '사용자 이메일' })
    email: string;
}

export class UserLoginDto {
    @ApiPropertyOptional({ description: '사용자 id' })
    id: string;

    @ApiPropertyOptional({ description: '사용자 password' })
    password: string;
}
