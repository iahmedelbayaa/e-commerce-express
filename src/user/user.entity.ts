import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    role: string;
}