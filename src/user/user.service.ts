
import UserEntity from "./user.entity";
import { IUser } from "./user.interface";

export class UserService {

    async create(user: Partial<IUser>) {
        const userExist = await UserEntity.findOne({ where: { email: user.email } });
        if (userExist) {
            return { message: 'User already exists' };
        }
        await UserEntity.create(user); 
        return { message: 'User created' };
    }
    

    async findAll() {
        const usersExist = await UserEntity.findAll();
        if (usersExist.length === 0) {
            return { message: 'No users found' };
        }
        return usersExist;
    }

    async findOne(id: number) {
        const userExist = await UserEntity.findByPk(id);
        if (!userExist) {
            return { message: 'User not found' };
        }
        return userExist;
    }

    async update(id: number, user: Partial<IUser>) {
        const userExist = await UserEntity.findByPk(id);
        if (!userExist) {
            return { message: 'User not found' };
        }
        await userExist.update(user);
        return { message: 'User updated' };
    }

    async remove(id: number) {
        const userExist = await UserEntity.findByPk(id);
        if (!userExist) {
            return { message: 'User not found' };
        }
        await userExist.destroy();
        return { message: 'User deleted' };
    }
}