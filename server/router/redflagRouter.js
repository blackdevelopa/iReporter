import { Router } from 'express';
import redFlag from '../controllers/redFlag';
import adminController from '../controllers/adminController';
import Auth from '../middleware/authentication';
const redflagRouter = Router();

const { 
  createRedflag, getAllRedflags, 
  getRedflagsById, patchRedflagLocation, 
  patchRedflagComment, deleteRedflagById 
} = redFlag;

const { patchRedflagStatus } = adminController;

const { verifyToken } = Auth;

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
  '/red-flag/:id/location', 
  verifyToken, patchRedflagLocation
);

redflagRouter.patch(
  '/red-flag/:id/comment', 
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