import express from "express";
import { RoleController } from "./role.controller";




const router = express.Router();
const roleController = new RoleController();

router.post('/', roleController.create.bind(roleController));
router.get('/', roleController.findAll.bind(roleController));
router.get('/:id', roleController.findOne.bind(roleController));
router.put('/:id', roleController.update.bind(roleController));
router.delete('/:id', roleController.remove.bind(roleController));


export default router;