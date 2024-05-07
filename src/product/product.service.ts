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
        } catch (error : any) {
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
        }catch (error: any) {
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
        }catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async getProductsByPrice(price: number): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price } });
        }catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async getProductsByRating(rating: number): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating } });
        }catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async getProductsByDiscount(discount: number): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { discount } });
        }catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async getProductsByStatus(status: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { status } });
        }catch (error: any) {
            throw new ApiError(error.message);
        }
    }

    async getProductsByCreatedAt(created_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { created_at } });
        }catch(error: any) {
            throw new ApiError(error.message);
        }
    }

    async getProductsByUpdatedAt(updated_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { updated_at } });
        }catch(error: any) {
            throw new ApiError(error.message);
        }
    }

    async getProductsByDeletedAt(deleted_at: string): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { deleted_at } });
        }catch(error: any) {
            throw new ApiError(error.message);
        }
    }

    async getProductsByPriceRange(min: number, max: number): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { price: { [Op.between]: [min, max] } } });
        } catch (error : any) {
            throw new ApiError(error.message)
        }
    }

    async getProductsByRatingRange(min: number, max: number): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { rating: { [Op.between]: [min, max] } } });
        } catch (error : any) {
            throw new ApiError(error.message)
        }
    }

    async getProductsByDiscountRange(min: number, max: number): Promise<IProduct[]> {
        try {
            return await ProductEntity.findAll({ where: { discount: { [Op.between]: [min, max] } } });
        } catch (error : any) {
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
        } catch (error : any) {
            throw new ApiError(error.message)
        }
    }

    async getProductsByDeletedAtRange(min: string, max: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { deleted_at: { [Op.between]: [min, max] } } });
    }

    async getProductsByPriceAndRating(price: number, rating: number): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating } });
    }

    async getProductsByPriceAndDiscount(price: number, discount: number): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, discount } });
    }

    async getProductsByPriceAndStatus(price: number, status: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, status } });
    }

    async getProductsByPriceAndCreatedAt(price: number, created_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, created_at } });
    }

    async getProductsByPriceAndUpdatedAt(price: number, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, updated_at } });
    }

    async getProductsByPriceAndDeletedAt(price: number, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, deleted_at } });
    }

    async getProductsByRatingAndDiscount(rating: number, discount: number): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, discount } });
    }

    async getProductsByRatingAndStatus(rating: number, status: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, status } });
    }

    async getProductsByRatingAndCreatedAt(rating: number, created_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, created_at } });
    }

    async getProductsByRatingAndUpdatedAt(rating: number, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, updated_at } });
    }

    async getProductsByRatingAndDeletedAt(rating: number, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, deleted_at } });
    }

    async getProductsByDiscountAndStatus(discount: number, status: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { discount, status } });
    }

    async getProductsByDiscountAndCreatedAt(discount: number, created_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { discount, created_at } });
    }

    async getProductsByDiscountAndUpdatedAt(discount: number, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { discount, updated_at } });
    }

    async getProductsByDiscountAndDeletedAt(discount: number, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { discount, deleted_at } });
    }

    async getProductsByStatusAndCreatedAt(status: string, created_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { status, created_at } });
    }

    async getProductsByStatusAndUpdatedAt(status: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { status, updated_at } });
    }

    async getProductsByStatusAndDeletedAt(status: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { status, deleted_at } });
    }

    async getProductsByCreatedAtAndUpdatedAt(created_at: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { created_at, updated_at } });
    }

    async getProductsByCreatedAtAndDeletedAt(created_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { created_at, deleted_at } });
    }

    async getProductsByUpdatedAtAndDeletedAt(updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { updated_at, deleted_at } });
    }

    async getProductsByPriceAndRatingAndDiscount(price: number, rating: number, discount: number): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, discount } });
    }

    async getProductsByPriceAndRatingAndStatus(price: number, rating: number, status: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, status } });
    }

    async getProductsByPriceAndRatingAndCreatedAt(price: number, rating: number, created_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, created_at } });
    }

    async getProductsByPriceAndRatingAndUpdatedAt(price: number, rating: number, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, updated_at } });
    }

    async getProductsByPriceAndRatingAndDeletedAt(price: number, rating: number, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, deleted_at } });
    }

    async getProductsByPriceAndDiscountAndStatus(price: number, discount: number, status: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, discount, status } });
    }

    async getProductsByPriceAndDiscountAndCreatedAt(price: number, discount: number, created_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, discount, created_at } });
    }

    async getProductsByPriceAndDiscountAndUpdatedAt(price: number, discount: number, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, discount, updated_at } });
    }

    async getProductsByPriceAndDiscountAndDeletedAt(price: number, discount: number, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, discount, deleted_at } });
    }

    async getProductsByPriceAndStatusAndCreatedAt(price: number, status: string, created_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, status, created_at } });
    }

    async getProductsByPriceAndStatusAndUpdatedAt(price: number, status: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, status, updated_at } });
    }

    async getProductsByPriceAndStatusAndDeletedAt(price: number, status: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, status, deleted_at } });
    }

    async getProductsByPriceAndCreatedAtAndUpdatedAt(price: number, created_at: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, created_at, updated_at } });
    }

    async getProductsByPriceAndCreatedAtAndDeletedAt(price: number, created_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, created_at, deleted_at } });
    }

    async getProductsByPriceAndUpdatedAtAndDeletedAt(price: number, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, updated_at, deleted_at } });
    }

    async getProductsByRatingAndDiscountAndStatus(rating: number, discount: number, status: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, discount, status } });
    }

    async getProductsByRatingAndDiscountAndCreatedAt(rating: number, discount: number, created_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, discount, created_at } });
    }

    async getProductsByRatingAndDiscountAndUpdatedAt(rating: number, discount: number, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, discount, updated_at } });
    }

    async getProductsByRatingAndDiscountAndDeletedAt(rating: number, discount: number, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, discount, deleted_at } });
    }

    async getProductsByRatingAndStatusAndCreatedAt(rating: number, status: string, created_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, status, created_at } });
    }

    async getProductsByRatingAndStatusAndUpdatedAt(rating: number, status: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, status, updated_at } });
    }

    async getProductsByRatingAndStatusAndDeletedAt(rating: number, status: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, status, deleted_at } });
    }

    async getProductsByRatingAndCreatedAtAndUpdatedAt(rating: number, created_at: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, created_at, updated_at } });
    }

    async getProductsByRatingAndCreatedAtAndDeletedAt(rating: number, created_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, created_at, deleted_at } });
    }

    async getProductsByRatingAndUpdatedAtAndDeletedAt(rating: number, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, updated_at, deleted_at } });
    }

    async getProductsByDiscountAndStatusAndCreatedAt(discount: number, status: string, created_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { discount, status, created_at } });
    }

    async getProductsByDiscountAndStatusAndUpdatedAt(discount: number, status: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { discount, status, updated_at } });
    }

    async getProductsByDiscountAndStatusAndDeletedAt(discount: number, status: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { discount, status, deleted_at } });
    }

    async getProductsByDiscountAndCreatedAtAndUpdatedAt(discount: number, created_at: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { discount, created_at, updated_at } });
    }

    async getProductsByDiscountAndCreatedAtAndDeletedAt(discount: number, created_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { discount, created_at, deleted_at } });
    }

    async getProductsByDiscountAndUpdatedAtAndDeletedAt(discount: number, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { discount, updated_at, deleted_at } });
    }

    async getProductsByStatusAndCreatedAtAndUpdatedAt(status: string, created_at: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { status, created_at, updated_at } });
    }

    async getProductsByStatusAndCreatedAtAndDeletedAt(status: string, created_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { status, created_at, deleted_at } });
    }

    async getProductsByStatusAndUpdatedAtAndDeletedAt(status: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { status, updated_at, deleted_at } });
    }

    async getProductsByCreatedAtAndUpdatedAtAndDeletedAt(created_at: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { created_at, updated_at, deleted_at } });
    }

    async getProductsByPriceAndRatingAndDiscountAndStatus(price: number, rating: number, discount: number, status: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, discount, status } });
    }

    async getProductsByPriceAndRatingAndDiscountAndCreatedAt(price: number, rating: number, discount: number, created_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, discount, created_at } });
    }

    async getProductsByPriceAndRatingAndDiscountAndUpdatedAt(price: number, rating: number, discount: number, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, discount, updated_at } });
    }

    async getProductsByPriceAndRatingAndDiscountAndDeletedAt(price: number, rating: number, discount: number, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, discount, deleted_at } });
    }

    async getProductsByPriceAndRatingAndStatusAndCreatedAt(price: number, rating: number, status: string, created_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, status, created_at } });
    }

    async getProductsByPriceAndRatingAndStatusAndUpdatedAt(price: number, rating: number, status: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, status, updated_at } });
    }

    async getProductsByPriceAndRatingAndStatusAndDeletedAt(price: number, rating: number, status: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, status, deleted_at } });
    }

    async getProductsByPriceAndRatingAndCreatedAtAndUpdatedAt(price: number, rating: number, created_at: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, created_at, updated_at } });
    }

    async getProductsByPriceAndRatingAndCreatedAtAndDeletedAt(price: number, rating: number, created_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, created_at, deleted_at } });
    }

    async getProductsByPriceAndRatingAndUpdatedAtAndDeletedAt(price: number, rating: number, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, updated_at, deleted_at } });
    }

    async getProductsByPriceAndDiscountAndStatusAndCreatedAt(price: number, discount: number, status: string, created_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, discount, status, created_at } });
    }

    async getProductsByPriceAndDiscountAndStatusAndUpdatedAt(price: number, discount: number, status: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, discount, status, updated_at } });
    }

    async getProductsByPriceAndDiscountAndStatusAndDeletedAt(price: number, discount: number, status: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, discount, status, deleted_at } });
    }

    async getProductsByPriceAndDiscountAndCreatedAtAndUpdatedAt(price: number, discount: number, created_at: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, discount, created_at, updated_at } });
    }

    async getProductsByPriceAndDiscountAndCreatedAtAndDeletedAt(price: number, discount: number, created_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, discount, created_at, deleted_at } });
    }

    async getProductsByPriceAndDiscountAndUpdatedAtAndDeletedAt(price: number, discount: number, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, discount, updated_at, deleted_at } });
    }

    async getProductsByPriceAndStatusAndCreatedAtAndUpdatedAt(price: number, status: string, created_at: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, status, created_at, updated_at } });
    }

    async getProductsByPriceAndStatusAndCreatedAtAndDeletedAt(price: number, status: string, created_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, status, created_at, deleted_at } });
    }

    async getProductsByPriceAndStatusAndUpdatedAtAndDeletedAt(price: number, status: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, status, updated_at, deleted_at } });
    }

    async getProductsByRatingAndDiscountAndStatusAndCreatedAt(rating: number, discount: number, status: string, created_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, discount, status, created_at } });
    }

    async getProductsByRatingAndDiscountAndStatusAndUpdatedAt(rating: number, discount: number, status: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, discount, status, updated_at } });
    }

    async getProductsByRatingAndDiscountAndStatusAndDeletedAt(rating: number, discount: number, status: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, discount, status, deleted_at } });
    }

    async getProductsByRatingAndDiscountAndCreatedAtAndUpdatedAt(rating: number, discount: number, created_at: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, discount, created_at, updated_at } });
    }

    async getProductsByRatingAndDiscountAndCreatedAtAndDeletedAt(rating: number, discount: number, created_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, discount, created_at, deleted_at } });
    }

    async getProductsByRatingAndDiscountAndUpdatedAtAndDeletedAt(rating: number, discount: number, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, discount, updated_at, deleted_at } });
    }

    async getProductsByRatingAndStatusAndCreatedAtAndUpdatedAt(rating: number, status: string, created_at: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, status, created_at, updated_at } });
    }

    async getProductsByRatingAndStatusAndCreatedAtAndDeletedAt(rating: number, status: string, created_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, status, created_at, deleted_at } });
    }

    async getProductsByRatingAndStatusAndUpdatedAtAndDeletedAt(rating: number, status: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, status, updated_at, deleted_at } });
    }

    async getProductsByDiscountAndStatusAndCreatedAtAndUpdatedAt(discount: number, status: string, created_at: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { discount, status, created_at, updated_at } });
    }

    async getProductsByDiscountAndStatusAndCreatedAtAndDeletedAt(discount: number, status: string, created_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { discount, status, created_at, deleted_at } });
    }

    async getProductsByDiscountAndStatusAndUpdatedAtAndDeletedAt(discount: number, status: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { discount, status, updated_at, deleted_at } });
    }

    async getProductsByStatusAndCreatedAtAndUpdatedAtAndDeletedAt(status: string, created_at: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { status, created_at, updated_at, deleted_at } });
    }

    async getProductsByPriceAndRatingAndDiscountAndStatusAndCreatedAt(price: number, rating: number, discount: number, status: string, created_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, discount, status, created_at } });
    }

    async getProductsByPriceAndRatingAndDiscountAndStatusAndUpdatedAt(price: number, rating: number, discount: number, status: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, discount, status, updated_at } });
    }

    async getProductsByPriceAndRatingAndDiscountAndStatusAndDeletedAt(price: number, rating: number, discount: number, status: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, discount, status, deleted_at } });
    }

    async getProductsByPriceAndRatingAndDiscountAndCreatedAtAndUpdatedAt(price: number, rating: number, discount: number, created_at: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, discount, created_at, updated_at } });
    }

    async getProductsByPriceAndRatingAndDiscountAndCreatedAtAndDeletedAt(price: number, rating: number, discount: number, created_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, discount, created_at, deleted_at } });
    }

    async getProductsByPriceAndRatingAndDiscountAndUpdatedAtAndDeletedAt(price: number, rating: number, discount: number, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, discount, updated_at, deleted_at } });
    }

    async getProductsByPriceAndRatingAndStatusAndCreatedAtAndUpdatedAt(price: number, rating: number, status: string, created_at: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, status, created_at, updated_at } });
    }

    async getProductsByPriceAndRatingAndStatusAndCreatedAtAndDeletedAt(price: number, rating: number, status: string, created_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, status, created_at, deleted_at } });
    }

    async getProductsByPriceAndRatingAndStatusAndUpdatedAtAndDeletedAt(price: number, rating: number, status: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, status, updated_at, deleted_at } });
    }

    async getProductsByPriceAndRatingAndCreatedAtAndUpdatedAtAndDeletedAt(price: number, rating: number, created_at: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, created_at, updated_at, deleted_at } });
    }

    async getProductsByPriceAndDiscountAndStatusAndCreatedAtAndUpdatedAt(price: number, discount: number, status: string, created_at: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, discount, status, created_at, updated_at } });
    }

    async getProductsByPriceAndDiscountAndStatusAndCreatedAtAndDeletedAt(price: number, discount: number, status: string, created_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, discount, status, created_at, deleted_at } });
    }

    async getProductsByPriceAndDiscountAndStatusAndUpdatedAtAndDeletedAt(price: number, discount: number, status: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, discount, status, updated_at, deleted_at } });
    }

    async getProductsByPriceAndStatusAndCreatedAtAndUpdatedAtAndDeletedAt(price: number, status: string, created_at: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, status, created_at, updated_at, deleted_at } });
    }

    async getProductsByRatingAndDiscountAndStatusAndCreatedAtAndUpdatedAt(rating: number, discount: number, status: string, created_at: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, discount, status, created_at, updated_at } });
    }

    async getProductsByRatingAndDiscountAndStatusAndCreatedAtAndDeletedAt(rating: number, discount: number, status: string, created_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, discount, status, created_at, deleted_at } });
    }

    async getProductsByRatingAndDiscountAndStatusAndUpdatedAtAndDeletedAt(rating: number, discount: number, status: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, discount, status, updated_at, deleted_at } });
    }

    async getProductsByRatingAndStatusAndCreatedAtAndUpdatedAtAndDeletedAt(rating: number, status: string, created_at: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, status, created_at, updated_at, deleted_at } });
    }

    async getProductsByDiscountAndStatusAndCreatedAtAndUpdatedAtAndDeletedAt(discount: number, status: string, created_at: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { discount, status, created_at, updated_at, deleted_at } });
    }

    async getProductsByPriceAndRatingAndDiscountAndStatusAndCreatedAtAndUpdatedAt(price: number, rating: number, discount: number, status: string, created_at: string, updated_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, discount, status, created_at, updated_at } });
    }

    async getProductsByPriceAndRatingAndDiscountAndStatusAndCreatedAtAndDeletedAt(price: number, rating: number, discount: number, status: string, created_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, discount, status, created_at, deleted_at } });
    }

    async getProductsByPriceAndRatingAndDiscountAndStatusAndUpdatedAtAndDeletedAt(price: number, rating: number, discount: number, status: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, discount, status, updated_at, deleted_at } });
    }

    async getProductsByPriceAndRatingAndStatusAndCreatedAtAndUpdatedAtAndDeletedAt(price: number, rating: number, status: string, created_at: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, status, created_at, updated_at, deleted_at } });
    }

    async getProductsByPriceAndDiscountAndStatusAndCreatedAtAndUpdatedAtAndDeletedAt(price: number, discount: number, status: string, created_at: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, discount, status, created_at, updated_at, deleted_at } });
    }

    async getProductsByRatingAndDiscountAndStatusAndCreatedAtAndUpdatedAtAndDeletedAt(rating: number, discount: number, status: string, created_at: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { rating, discount, status, created_at, updated_at, deleted_at } });
    }

    async getProductsByPriceAndRatingAndDiscountAndStatusAndCreatedAtAndUpdatedAtAndDeletedAt(price: number, rating: number, discount: number, status: string, created_at: string, updated_at: string, deleted_at: string): Promise<IProduct[]> {
        return await ProductEntity.findAll({ where: { price, rating, discount, status, created_at, updated_at, deleted_at } });
    }


}