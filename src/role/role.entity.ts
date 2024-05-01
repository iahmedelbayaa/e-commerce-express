import { DataTypes, Model } from "sequelize";
import sequelize from '../utils/sequelize.config';

class RoleEntity extends Model{
    public id!: number;
    public role!: string;
}

RoleEntity.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Role',
        timestamps: true,
    }
);

export default RoleEntity;


