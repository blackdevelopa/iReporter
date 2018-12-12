import { Router } from 'express';
import redFlag from '../controllers/redFlag';
import Validate from '../middleware/validate';
const incidentRouter = Router();

const { 
  createRedflag, getAllRedflags, 
  getRedflagsById, patchRedflagLocation, 
  patchRedflagComment, deleteRedflagById 
} = redFlag;

const { verifyToken } = Validate;

incidentRouter.post(
  '/red-flags',
  verifyToken, createRedflag
);

incidentRouter.get(
  '/red-flags', 
  verifyToken, getAllRedflags
);

incidentRouter.get(
  '/red-flags/:id', 
  verifyToken, getRedflagsById
);

incidentRouter.patch(
  '/red-flags/:id/location', 
  verifyToken, patchRedflagLocation
);

incidentRouter.patch(
  '/red-flags/:id/comment', 
  verifyToken, patchRedflagComment
);

incidentRouter.delete(
  '/red-flags/:id', 
  verifyToken, deleteRedflagById
);

export default incidentRouter;