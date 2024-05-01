import { Model, DataTypes } from 'sequelize';
import sequelize from '../utils/sequelize.config';

class UserEntity extends Model {
    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;
    public role!: string;
}

UserEntity.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'User',
        timestamps: true,
    }
);

export default UserEntity;