import { Router } from 'express';
import redFlag from '../controllers/redFlag';
import Validate from '../middleware/validate';
const redflagRouter = Router();

const { 
  createRedflag, getAllRedflags, 
  getRedflagsById, patchRedflagLocation, 
  patchRedflagComment, deleteRedflagById,
  patchRedflagStatus 
} = redFlag;

const { verifyToken } = Validate;

redflagRouter.post(
  '/red-flags',
  verifyToken, createRedflag
);

redflagRouter.get(
  '/red-flags', 
  verifyToken, getAllRedflags
);

redflagRouter.get(
  '/red-flags/:id', 
  verifyToken, getRedflagsById
);

redflagRouter.patch(
  '/red-flags/:id/location', 
  verifyToken, patchRedflagLocation
);

redflagRouter.patch(
  '/red-flags/:id/comment', 
  verifyToken, patchRedflagComment
);

redflagRouter.delete(
  '/red-flags/:id', 
  verifyToken, deleteRedflagById
);

redflagRouter.patch(
  '/red-flags/:id/status', 
  verifyToken, patchRedflagStatus
);

export default redflagRouter;