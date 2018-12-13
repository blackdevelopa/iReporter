import { Router } from 'express';
import userAuth from '../controllers/auth';
const userRouter = Router();

const { createUser, loginUser } = userAuth;

userRouter.post(
  '/auth/signup', 
  createUser
);

userRouter.post(
  '/auth/login', 
  loginUser
);

export default userRouter;