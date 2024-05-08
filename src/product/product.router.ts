import { Router } from "express";
import { ProductController } from "./product.controller";



const productController = new ProductController();
const router = Router();


router.post("/", productController.create);
router.get("/", productController.get);
router.get("/:id", productController.getById);
router.put("/:id", productController.update);
router.delete("/:id", productController.delete);


export default router;
