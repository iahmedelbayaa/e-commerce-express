import ApiError from "../utils/handle-api/api.error";
import { ProductEntity } from "./product.entity";
import { IProduct } from "./product.interface";
import { Op } from "sequelize";

export class ProductService {
    async createProduct(product: Partial<IProduct>): Promise<IProduct> {
        try {
            return await ProductEntity.create(product);
        } catch (error: any) {
            throw new ApiError(error.message);
        }

    }

    async updateProduct(id: number, product: Partial<IProduct>) {
        try {
            return await ProductEntity.update(product, { where: { id } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async deleteProduct(id: number): Promise<number> {
        try {
            return await ProductEntity.destroy({ where: { id } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async getProducts(): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll();
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async getProductById(id: number) {
        try {
            return await ProductEntity.findByPk(id);
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async getProductsByCategory(category: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { category } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async getProductsByPrice(price: number): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async getProductsByRating(rating: number): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async getProductsByDiscount(discount: number): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { discount } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async getProductsByStatus(status: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { status } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async getProductsByCreatedAt(created_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { created_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async getProductsByUpdatedAt(updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async getProductsByDeletedAt(deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async getProductsByPriceRange(min: number, max: number): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price: { [Op.between]: [min, max] } } });
        } catch (error: any) {
            throw new ApiError(error.message)
        }
    }

    async getProductsByRatingRange(min: number, max: number): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating: { [Op.between]: [min, max] } } });
        } catch (error: any) {
            throw new ApiError(error.message)
        }
    }

    async getProductsByDiscountRange(min: number, max: number): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { discount: { [Op.between]: [min, max] } } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async getProductsByCreatedAtRange(min: string, max: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { created_at: { [Op.between]: [min, max] } } });
        } catch (error: any) {
            throw new ApiError(error.message)
        }
    }

    async getProductsByUpdatedAtRange(min: string, max: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { updated_at: { [Op.between]: [min, max] } } });
        } catch (error: any) {
            throw new ApiError(error.message)
        }
    }

    async getProductsByDeletedAtRange(min: string, max: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { deleted_at: { [Op.between]: [min, max] } } });
        } catch (error: any) {
            throw new ApiError(error.message)
        }
    }

    async getProductsByPriceAndRating(price: number, rating: number): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating } });
        } catch (error: any) {
            throw new ApiError(error.message)
        }
    }

    async getProductsByPriceAndDiscount(price: number, discount: number): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, discount } });
        } catch (error: any) {
            throw new ApiError(error.message)
        }
    }

    async getProductsByPriceAndStatus(price: number, status: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, status } });
        } catch (error: any) {
            throw new ApiError(error.message)
        }
    }

    async getProductsByPriceAndCreatedAt(price: number, created_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, created_at } });
        } catch (error: any) {
            throw new ApiError(error.message)
        }
    }

    async getProductsByPriceAndUpdatedAt(price: number, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message)
        }
    }

    async getProductsByPriceAndDeletedAt(price: number, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndDiscount(rating: number, discount: number): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, discount } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndStatus(rating: number, status: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, status } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndCreatedAt(rating: number, created_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, created_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndUpdatedAt(rating: number, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndDeletedAt(rating: number, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByDiscountAndStatus(discount: number, status: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { discount, status } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByDiscountAndCreatedAt(discount: number, created_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { discount, created_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByDiscountAndUpdatedAt(discount: number, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { discount, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByDiscountAndDeletedAt(discount: number, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { discount, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByStatusAndCreatedAt(status: string, created_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { status, created_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByStatusAndUpdatedAt(status: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { status, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByStatusAndDeletedAt(status: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { status, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByCreatedAtAndUpdatedAt(created_at: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { created_at, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByCreatedAtAndDeletedAt(created_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { created_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByUpdatedAtAndDeletedAt(updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndDiscount(price: number, rating: number, discount: number): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, discount } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndStatus(price: number, rating: number, status: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, status } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndCreatedAt(price: number, rating: number, created_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, created_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndUpdatedAt(price: number, rating: number, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndDeletedAt(price: number, rating: number, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndDiscountAndStatus(price: number, discount: number, status: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, discount, status } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndDiscountAndCreatedAt(price: number, discount: number, created_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, discount, created_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndDiscountAndUpdatedAt(price: number, discount: number, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, discount, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndDiscountAndDeletedAt(price: number, discount: number, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, discount, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndStatusAndCreatedAt(price: number, status: string, created_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, status, created_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndStatusAndUpdatedAt(price: number, status: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, status, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndStatusAndDeletedAt(price: number, status: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, status, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndCreatedAtAndUpdatedAt(price: number, created_at: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, created_at, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndCreatedAtAndDeletedAt(price: number, created_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, created_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndUpdatedAtAndDeletedAt(price: number, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndDiscountAndStatus(rating: number, discount: number, status: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, discount, status } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndDiscountAndCreatedAt(rating: number, discount: number, created_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, discount, created_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndDiscountAndUpdatedAt(rating: number, discount: number, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, discount, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndDiscountAndDeletedAt(rating: number, discount: number, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, discount, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndStatusAndCreatedAt(rating: number, status: string, created_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, status, created_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndStatusAndUpdatedAt(rating: number, status: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, status, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndStatusAndDeletedAt(rating: number, status: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, status, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndCreatedAtAndUpdatedAt(rating: number, created_at: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, created_at, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndCreatedAtAndDeletedAt(rating: number, created_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, created_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndUpdatedAtAndDeletedAt(rating: number, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByDiscountAndStatusAndCreatedAt(discount: number, status: string, created_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { discount, status, created_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByDiscountAndStatusAndUpdatedAt(discount: number, status: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { discount, status, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByDiscountAndStatusAndDeletedAt(discount: number, status: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { discount, status, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByDiscountAndCreatedAtAndUpdatedAt(discount: number, created_at: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { discount, created_at, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByDiscountAndCreatedAtAndDeletedAt(discount: number, created_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { discount, created_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByDiscountAndUpdatedAtAndDeletedAt(discount: number, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { discount, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByStatusAndCreatedAtAndUpdatedAt(status: string, created_at: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { status, created_at, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByStatusAndCreatedAtAndDeletedAt(status: string, created_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { status, created_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByStatusAndUpdatedAtAndDeletedAt(status: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { status, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByCreatedAtAndUpdatedAtAndDeletedAt(created_at: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { created_at, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndDiscountAndStatus(price: number, rating: number, discount: number, status: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, discount, status } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndDiscountAndCreatedAt(price: number, rating: number, discount: number, created_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, discount, created_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndDiscountAndUpdatedAt(price: number, rating: number, discount: number, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, discount, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndDiscountAndDeletedAt(price: number, rating: number, discount: number, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, discount, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndStatusAndCreatedAt(price: number, rating: number, status: string, created_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, status, created_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndStatusAndUpdatedAt(price: number, rating: number, status: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, status, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndStatusAndDeletedAt(price: number, rating: number, status: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, status, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndCreatedAtAndUpdatedAt(price: number, rating: number, created_at: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, created_at, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndCreatedAtAndDeletedAt(price: number, rating: number, created_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, created_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndUpdatedAtAndDeletedAt(price: number, rating: number, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndDiscountAndStatusAndCreatedAt(price: number, discount: number, status: string, created_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, discount, status, created_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndDiscountAndStatusAndUpdatedAt(price: number, discount: number, status: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, discount, status, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndDiscountAndStatusAndDeletedAt(price: number, discount: number, status: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, discount, status, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndDiscountAndCreatedAtAndUpdatedAt(price: number, discount: number, created_at: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, discount, created_at, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndDiscountAndCreatedAtAndDeletedAt(price: number, discount: number, created_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, discount, created_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndDiscountAndUpdatedAtAndDeletedAt(price: number, discount: number, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, discount, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndStatusAndCreatedAtAndUpdatedAt(price: number, status: string, created_at: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, status, created_at, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndStatusAndCreatedAtAndDeletedAt(price: number, status: string, created_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, status, created_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndStatusAndUpdatedAtAndDeletedAt(price: number, status: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, status, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndDiscountAndStatusAndCreatedAt(rating: number, discount: number, status: string, created_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, discount, status, created_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndDiscountAndStatusAndUpdatedAt(rating: number, discount: number, status: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, discount, status, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndDiscountAndStatusAndDeletedAt(rating: number, discount: number, status: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, discount, status, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndDiscountAndCreatedAtAndUpdatedAt(rating: number, discount: number, created_at: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, discount, created_at, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndDiscountAndCreatedAtAndDeletedAt(rating: number, discount: number, created_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, discount, created_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndDiscountAndUpdatedAtAndDeletedAt(rating: number, discount: number, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, discount, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndStatusAndCreatedAtAndUpdatedAt(rating: number, status: string, created_at: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, status, created_at, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndStatusAndCreatedAtAndDeletedAt(rating: number, status: string, created_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, status, created_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndStatusAndUpdatedAtAndDeletedAt(rating: number, status: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, status, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByDiscountAndStatusAndCreatedAtAndUpdatedAt(discount: number, status: string, created_at: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { discount, status, created_at, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByDiscountAndStatusAndCreatedAtAndDeletedAt(discount: number, status: string, created_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { discount, status, created_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByDiscountAndStatusAndUpdatedAtAndDeletedAt(discount: number, status: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { discount, status, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByStatusAndCreatedAtAndUpdatedAtAndDeletedAt(status: string, created_at: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { status, created_at, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndDiscountAndStatusAndCreatedAt(price: number, rating: number, discount: number, status: string, created_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, discount, status, created_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndDiscountAndStatusAndUpdatedAt(price: number, rating: number, discount: number, status: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, discount, status, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndDiscountAndStatusAndDeletedAt(price: number, rating: number, discount: number, status: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, discount, status, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndDiscountAndCreatedAtAndUpdatedAt(price: number, rating: number, discount: number, created_at: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, discount, created_at, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndDiscountAndCreatedAtAndDeletedAt(price: number, rating: number, discount: number, created_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, discount, created_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndDiscountAndUpdatedAtAndDeletedAt(price: number, rating: number, discount: number, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, discount, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndStatusAndCreatedAtAndUpdatedAt(price: number, rating: number, status: string, created_at: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, status, created_at, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndStatusAndCreatedAtAndDeletedAt(price: number, rating: number, status: string, created_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, status, created_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndStatusAndUpdatedAtAndDeletedAt(price: number, rating: number, status: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, status, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndCreatedAtAndUpdatedAtAndDeletedAt(price: number, rating: number, created_at: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, created_at, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndDiscountAndStatusAndCreatedAtAndUpdatedAt(price: number, discount: number, status: string, created_at: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, discount, status, created_at, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndDiscountAndStatusAndCreatedAtAndDeletedAt(price: number, discount: number, status: string, created_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, discount, status, created_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndDiscountAndStatusAndUpdatedAtAndDeletedAt(price: number, discount: number, status: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, discount, status, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndStatusAndCreatedAtAndUpdatedAtAndDeletedAt(price: number, status: string, created_at: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, status, created_at, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndDiscountAndStatusAndCreatedAtAndUpdatedAt(rating: number, discount: number, status: string, created_at: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, discount, status, created_at, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndDiscountAndStatusAndCreatedAtAndDeletedAt(rating: number, discount: number, status: string, created_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, discount, status, created_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndDiscountAndStatusAndUpdatedAtAndDeletedAt(rating: number, discount: number, status: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, discount, status, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndStatusAndCreatedAtAndUpdatedAtAndDeletedAt(rating: number, status: string, created_at: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, status, created_at, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByDiscountAndStatusAndCreatedAtAndUpdatedAtAndDeletedAt(discount: number, status: string, created_at: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { discount, status, created_at, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndDiscountAndStatusAndCreatedAtAndUpdatedAt(price: number, rating: number, discount: number, status: string, created_at: string, updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, discount, status, created_at, updated_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndDiscountAndStatusAndCreatedAtAndDeletedAt(price: number, rating: number, discount: number, status: string, created_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, discount, status, created_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndDiscountAndStatusAndUpdatedAtAndDeletedAt(price: number, rating: number, discount: number, status: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, discount, status, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndStatusAndCreatedAtAndUpdatedAtAndDeletedAt(price: number, rating: number, status: string, created_at: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, status, created_at, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndDiscountAndStatusAndCreatedAtAndUpdatedAtAndDeletedAt(price: number, discount: number, status: string, created_at: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, discount, status, created_at, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByRatingAndDiscountAndStatusAndCreatedAtAndUpdatedAtAndDeletedAt(rating: number, discount: number, status: string, created_at: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating, discount, status, created_at, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }
    
    async getProductsByPriceAndRatingAndDiscountAndStatusAndCreatedAtAndUpdatedAtAndDeletedAt(price: number, rating: number, discount: number, status: string, created_at: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price, rating, discount, status, created_at, updated_at, deleted_at } });
        } catch (error: any) {
            throw new ApiError(error.message);
        }
    }    

}