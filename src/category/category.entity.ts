import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/sequelize.config";

export class CategoryEntity extends Model{
    id: number;
    name: string;
    description: string;
    status: boolean;
    created_at?: Date;
    updated_at?: Date;
}

CategoryEntity.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'category',
    timestamps: false
})