import { Request, Response, NextFunction } from "express";
import { IRole } from "./role.interface";
import ApiError from "../utils/handle-api/api.error";
import { RoleService } from "./role.service";

export class RoleController {
    private roleService: RoleService;
    
    constructor(){
        this.roleService = new RoleService();
    }

    async create(req: Request, res: Response, next: NextFunction){
        try {
            const role: IRole = req.body;
            const response = await this.roleService.create(role);
            res.status(201).json(response);
        } catch (error : any) {
            throw ApiError.badRequest(error.message);
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction){
        try {
            const response = await this.roleService.findAll();
            res.status(200).json(response);
        } catch (error : any) {
            throw ApiError.badRequest(error.message);
        }
    }

    async findOne(req: Request, res: Response, next: NextFunction){
        try {
            const id = parseInt(req.params.id);
            const response = await this.roleService.findOne(id);
            res.status(200).json(response);
        } catch (error : any) {
            throw ApiError.badRequest(error.message);
        }
    }

    async update(req: Request, res: Response, next: NextFunction){
        try {
            const id = parseInt(req.params.id);
            const role: IRole = req.body;
            const response = await this.roleService.update(id, role);
            res.status(200).json(response);
        } catch (error : any) {
            throw ApiError.badRequest(error.message);
        }
    }

    async remove(req: Request, res: Response, next: NextFunction){
        try {
            const id = parseInt(req.params.id);
            const response = await this.roleService.remove(id);
            res.status(200).json(response);
        } catch (error : any) {
            throw ApiError.badRequest(error.message);
        }
    }

}