import { Router } from "express";
import userRouter from "./user/user.router";
import roleRouter from "./role/role.router";
import productRouter from "./product/product.router";


const router = Router();

router.use('/user', userRouter);
router.use('/role', roleRouter);
router.use('product', productRouter);


export default router;
