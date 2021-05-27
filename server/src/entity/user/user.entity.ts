import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    idx: number;

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
}