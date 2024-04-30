import { UserEntity } from "./user.entity";
import { myDataSource } from "../utils/db.config";
import { IUser } from "./user.interface";


export class UserService {
    private UserRepository = myDataSource.getRepository(UserEntity);

    async create(user: IUser) {
        const userExist = await this.UserRepository.findOne({ where: { email: user.email } });
        if (userExist) {
            return { message: 'User already exists' };
        }
        await this.UserRepository.save(user);
        return { message: 'User created' };
    }

    async findAll() {
        const usersExist = await this.UserRepository.find();
        if (usersExist.length === 0) {
            return { message: 'No users found' };
        }
        return usersExist;
    }

    async findOne(id: number) {
        const userExist = await this.UserRepository.findOne({where :{id : id}});
        if (!userExist) {
            return { message: 'User not found' };
        }
        return userExist;
    }

    async update(id: number, user: IUser) {
        const userExist = await this.UserRepository.findOne({where :{id : id}});
        if (!userExist) {
            return { message: 'User not found' };
        }
        await this.UserRepository.update(id, user);
        return { message: 'User updated' };
    }

    async remove(id: number) {
        const userExist = await this.UserRepository.findOne({where :{id : id}});
        if (!userExist) {
            return { message: 'User not found' };
        }
        await this.UserRepository.delete(id);
        return { message: 'User deleted' };
    }

}