import ApiError from "../utils/handle-api/api.error";
import { CategoryService } from "./category.service";
import { Request, Response } from "express";

export class CategoryController {
    private categoryService: CategoryService;

    constructor() {
        this.categoryService = new CategoryService();
    }

    async create(req: Request, res: Response) {
        try {
            const category = await this.categoryService.create(req.body);
            res.json(category)
        } catch (error: any) {
            throw new ApiError(error.message)
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const categories = await this.categoryService.findAll();
            res.json(categories)
        } catch (error: any) {
            throw new ApiError(error.message)
        }
    }

    async findOne(req: Request, res: Response) {
        try {
            const category = await this.categoryService.findOne(Number(req.params.id));
            res.json(category)
        } catch (error: any) {
            throw new ApiError(error.message)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const category = await this.categoryService.update(Number(req.params.id), req.body);
            res.json(category)
        } catch (error: any) {
            throw new ApiError(error.message)
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const category = await this.categoryService.remove(Number(req.params.id));
            res.json(category)
        } catch (error: any) {
            throw new ApiError(error.message)
        }
    }

}