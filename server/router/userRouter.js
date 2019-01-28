import { Router } from 'express';
import userAuth from '../controllers/userAuth';
import adminAuth from '../controllers/adminAuth';
import { validateLogin, validateSignup } from '../middleware/validate';
const userRouter = Router();

const { createUser, loginUser } = userAuth;
const { loginAdmin } = adminAuth;

userRouter.post(
  '/auth/signup', 
  validateSignup, createUser
);

userRouter.post(
  '/auth/login', 
  validateLogin, loginUser
);

userRouter.post(
  '/auth/login',
  validateLogin, loginAdmin
);

export default userRouter;