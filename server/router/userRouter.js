import { Router } from 'express';
import userAuth from '../controllers/auth';
const userRouter = Router();

const { createUser, loginUser, loginAdmin } = userAuth;

userRouter.post(
  '/auth/signup', 
  createUser
);

userRouter.post(
  '/auth/login', 
  loginUser
);

userRouter.post(
  '/auth/login',
  loginAdmin
);

export default userRouter;