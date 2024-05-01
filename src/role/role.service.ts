import RoleEntity from "./role.entity";
import { IRole } from "./role.interface";



export class RoleService {
    async create(role: Partial<IRole>) {
        const roleExist = await RoleEntity.findOne({ where: { role: role.role } });
        if (roleExist) {
            return { message: 'Role already exists' };
        }
        await RoleEntity.create(role);
        return { message: 'Role created' };
    }

    async findAll() {
        const rolesExist = await RoleEntity.findAll();
        if (rolesExist.length === 0) {
            return { message: 'No roles found' };
        }
        return rolesExist;
    }

    async findOne(id: number) {
        const roleExist = await RoleEntity.findByPk(id);
        if (!roleExist) {
            return { message: 'Role not found' };
        }
        return roleExist;
    }

    async update(id: number, role: Partial<IRole>) {
        const roleExist = await RoleEntity.findByPk(id);
        if (!roleExist) {
            return { message: 'Role not found' };
        }
        await roleExist.update(role);
        return { message: 'Role updated' };
    }

    async remove(id: number) {
        const roleExist = await RoleEntity.findByPk(id);
        if (!roleExist) {
            return { message: 'Role not found' };
        }
        await roleExist.destroy();
        return { message: 'Role deleted' };
    }
}