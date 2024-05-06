import { Router } from "express";
import { CategoryController } from "./category.controller";




const categoryController = new CategoryController();
const router = Router();

router.get('/', categoryController.findAll);
router.get('/:id', categoryController.findOne);
router.post('/', categoryController.create);
router.put('/:id', categoryController.update);
router.delete('/:id', categoryController.remove);

export default router;