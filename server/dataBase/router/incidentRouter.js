import { Router } from 'express';
import redFlag from '../controllers/redFlag';
import Validate from '../middleware/validate';
const incidentRouter = Router();

const { createRedflag, getAllRedflags } = redFlag;
const { verifyToken } = Validate;

incidentRouter.post(
  '/red-flags',
  verifyToken, createRedflag
);

incidentRouter.get(
  '/red-flags', 
  getAllRedflags
);

export default incidentRouter;