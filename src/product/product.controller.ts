import { ProductService } from "./product.service";
import { IProduct } from "./product.interface";
import { Request, Response, NextFunction } from "express";



export class ProductController {
    private productService: ProductService;
    constructor(){
        this.productService = new ProductService();
    }

    async create(req: Request, res: Response, next: NextFunction){
        try {
            const product: IProduct = req.body;
            const response = await this.productService.createProduct(product);
            res.status(201).json(response);
        } catch (error : any) {
            res.status(400).json({ message: error.message });
        }
    }

    async get(req: Request, res: Response, next: NextFunction){
        try {
            const response = await this.productService.getProducts();
            res.status(200).json(response);
        } catch (error : any) {
            res.status(400).json({ message: error.message });
        }
    }

    async getById(req: Request, res: Response, next: NextFunction){
        try {
            const id = +(req.params.id);
            const response = await this.productService.getProductById(id);
            res.status(200).json(response);
        } catch (error : any) {
            res.status(400).json({ message: error.message });
        }
    }

    async update(req: Request, res: Response, next: NextFunction){
        try {
            const id = +(req.params.id);
            const product: IProduct = req.body;
            const response = await this.productService.updateProduct(id, product);
            res.status(200).json(response);
        } catch (error : any) {
            res.status(400).json({ message: error.message });
        }
    }

    async delete(req: Request, res: Response, next: NextFunction){
        try {
            const id = +(req.params.id);
            const response = await this.productService.deleteProduct(id);
            res.status(200).json(response);
        } catch (error : any) {
            res.status(400).json({ message: error.message });
        }
    }

    async getProductsByCategory(req: Request, res: Response, next: NextFunction){
        try {
            const category = req.params.category;
            const response = await this.productService.getProductsByCategory(category);
            res.status(200).json(response);
        } catch (error : any) {
            res.status(400).json({ message: error.message });
        }
    }

    async getProductsByPriceRange(req: Request, res: Response, next: NextFunction){
        try {
            const minPrice = +(req.params.minPrice);
            const maxPrice = +(req.params.maxPrice);
            const response = await this.productService.getProductsByPriceRange(minPrice, maxPrice);
            res.status(200).json(response);
        } catch (error : any) {
            res.status(400).json({ message: error.message });
        }
    }

    
}