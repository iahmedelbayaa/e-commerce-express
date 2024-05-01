import { Router } from "express";
import { UserController } from "./user.controller";


const router = Router();
const userController = new UserController();

router.get('/', userController.findAll.bind(userController));
router.get('/:id', userController.findOne.bind(userController));
router.post('/newUser', userController.create.bind(userController));
router.put('/:id', userController.update.bind(userController));
router.delete('/:id', userController.remove.bind(userController));

export default router;