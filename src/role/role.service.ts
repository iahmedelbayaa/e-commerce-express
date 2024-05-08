import ApiError from "../utils/handle-api/api.error";
import RoleEntity from "./role.entity";
import { IRole } from "./role.interface";

export class RoleService {
    async create(role: Partial<IRole>) {
        try {
            const roleExist = await RoleEntity.findOne({ where: { role: role.role } });
            if (roleExist) {
                return { message: 'Role already exists' };
            }
            await RoleEntity.create(role);
            return { message: 'Role created' };
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async findAll() {
        try {
            const rolesExist = await RoleEntity.findAll();
            if (rolesExist.length === 0) {
                return { message: 'No roles found' };
            }
            return rolesExist;
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async findOne(id: number) {
        try {
            const roleExist = await RoleEntity.findByPk(id);
            if (!roleExist) {
                return { message: 'Role not found' };
            }
            return roleExist;
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async update(id: number, role: Partial<IRole>) {
        try {
            const roleExist = await RoleEntity.findByPk(id);
            if (!roleExist) {
                return { message: 'Role not found' };
            }
            await roleExist.update(role);
            return { message: 'Role updated' };
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async remove(id: number) {
        try {
            const roleExist = await RoleEntity.findByPk(id);
            if (!roleExist) {
                return { message: 'Role not found' };
            }
            await roleExist.destroy();
            return { message: 'Role deleted' };
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
}
