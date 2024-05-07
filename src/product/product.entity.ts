import { DataTypes, Model } from "sequelize"
import sequelize from "../utils/sequelize.config";

export class ProductEntity extends Model {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
    // category: string;
    rating: number;
    discount: number;
    status: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}

ProductEntity.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    // category: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
    rating: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    discount: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'product',
    timestamps: false
})