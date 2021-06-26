import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserRegisterDto, UserLoginDto } from '../../dto/user/user.dto';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    idx: number;

    @Column({ length: 50 })
    id: string;

    @Column({ length: 255 })
    password: string;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 50 })
    email: string;

    @Column()
    regdate: Date;

    @Column()
    logindate: Date;

    static fetchUserInfo(idx: number) {
        return this.createQueryBuilder('user')
                .where('user.idx = :idx', { idx })
                .getOne();
    }

    static findUser(id: string) {
        return this.createQueryBuilder('user')
                .where('user.id = :id', { id })
                .getOne();
    }

    static register(register: UserRegisterDto) {
        return this.createQueryBuilder('user')
                .insert()
                .into('user')
                .values([
                    register
                ])
                .execute()
    }

    static login(login: UserLoginDto) {
        const { id, password } = login;

        return this.createQueryBuilder('user')
            .where('user.id = :id', { id })
            .andWhere('user.password = :password', { password })
            .getOne();
    }
}