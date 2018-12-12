import { Router } from 'express';
import redFlag from '../controllers/redFlag';
const incidentRouter = Router();

const { createRedflag, getAllRedflags } = redFlag;

incidentRouter.post(
  '/red-flags', 
  createRedflag
);

incidentRouter.get(
  '/red-flags', 
  getAllRedflags
);

export default incidentRouter;