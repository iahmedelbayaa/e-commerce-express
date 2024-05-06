import { CategoryService } from "./category.service";
import { Request, Response } from "express";

export class CategoryController {
    private categoryService: CategoryService;

    constructor() {
        this.categoryService = new CategoryService();
    }

    async create (req: Request , res: Response) {
        const category = await this.categoryService.create(req.body);
        res.json(category)
    }

    async findAll (req: Request , res: Response) {
        const categories = await this.categoryService.findAll();
        res.json(categories)
    }

    async findOne (req: Request , res: Response) {
        const category = await this.categoryService.findOne(Number(req.params.id));
        res.json(category)
    }

    async update (req: Request , res: Response) {
        const category = await this.categoryService.update(Number(req.params.id), req.body);
        res.json(category)
    }

    async remove (req: Request , res: Response) {
        const category = await this.categoryService.remove(Number(req.params.id));
        res.json(category)
    }

}