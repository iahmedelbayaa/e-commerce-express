import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";
import { IUser } from "./user.interface";
import ApiError from "../utils/handle-api/api.error";



export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const user: IUser = req.body;
            const response = await this.userService.create(user);
            res.status(201).json(response);
        } catch (error : any) {
            throw ApiError.badRequest(error.message);
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await this.userService.findAll();
            res.status(200).json(response);
        } catch (error : any) {
            throw ApiError.badRequest(error.message);
        }
    }

    async findOne(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            const response = await this.userService.findOne(id);
            res.status(200).json(response);
        } catch (error : any) {
            throw ApiError.badRequest(error.message);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            const user: IUser = req.body;
            const response = await this.userService.update(id, user);
            res.status(200).json(response);
        } catch (error : any) {
            throw ApiError.badRequest(error.message);
        }
    }

    async remove(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id);
            const response = await this.userService.remove(id);
            res.status(200).json(response);
        } catch (error : any) {
            throw ApiError.badRequest(error.message);
        }
    }
}