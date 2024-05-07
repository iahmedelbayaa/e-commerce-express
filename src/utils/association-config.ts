import { CategoryEntity } from "../category/category.entity";
import { ProductEntity } from "../product/product.entity";
import RoleEntity from "../role/role.entity";
import UserEntity from "../user/user.entity";

export const createAssociations = () => {
    UserEntity.belongsTo(RoleEntity, {
        constraints: true,
        foreignKey: {allowNull: false, name: 'roleId'},
        onDelete: 'CASCADE',
    })
    RoleEntity.hasMany(UserEntity, {
        foreignKey: 'roleId',
        onDelete: 'CASCADE',
    });

    ProductEntity.belongsTo(CategoryEntity, {
        constraints: true,
        foreignKey: {allowNull: false, name: 'categoryId'},
        onDelete: 'CASCADE',
    })
    CategoryEntity.hasMany(ProductEntity, {
        foreignKey: 'categoryId',
        onDelete: 'CASCADE',
    });
};