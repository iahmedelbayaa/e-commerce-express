import ApiError from "../utils/handle-api/api.error";
import UserEntity from "./user.entity";
import { IUser } from "./user.interface";

export class UserService {

    async create(user: Partial<IUser>) {
        try {
            const userExist = await UserEntity.findOne({ where: { email: user.email } });
            if (userExist) {
                return { message: 'User already exists' };
            }
            await UserEntity.create(user);
            return { message: 'User created' };
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    

    async findAll() {
        try {
            const usersExist = await UserEntity.findAll();
            if (usersExist.length === 0) {
                return { message: 'No users found' };
            }
            return usersExist;
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async findOne(id: number) {
        try {
            const userExist = await UserEntity.findByPk(id);
            if (!userExist) {
                return { message: 'User not found' };
            }
            return userExist;
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async update(id: number, user: Partial<IUser>) {
        try {
            const userExist = await UserEntity.findByPk(id);
            if (!userExist) {
                return { message: 'User not found' };
            }
            await userExist.update(user);
            return { message: 'User updated' };
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async remove(id: number) {
        try {
            const userExist = await UserEntity.findByPk(id);
            if (!userExist) {
                return { message: 'User not found' };
            }
            await userExist.destroy();
            return { message: 'User deleted' };
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
}
