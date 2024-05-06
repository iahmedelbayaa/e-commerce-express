import { Router } from "express";
import userRouter from "./user/user.router";
import roleRouter from "./role/role.router";


const router = Router();

router.use('/user', userRouter);
router.use('/role', roleRouter);


export default router;
