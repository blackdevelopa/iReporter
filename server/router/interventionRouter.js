import { Router } from 'express';
import intervention from '../controllers/intervention';
import adminController from '../controllers/adminController';
import Auth from '../middleware/authentication';
const interventionRouter = Router();

const { 
  createIntervention, getAllIntervention, 
  getInterventionById, patchInterventionLocation, 
  patchInterventionComment, deleteInterventionById 
} = intervention;

const { patchInterventionStatus } = adminController;

const { verifyToken } = Auth;

interventionRouter.post(
  '/interventions',
  verifyToken, createIntervention
);

interventionRouter.get(
  '/interventions', 
  verifyToken, getAllIntervention
);

interventionRouter.get(
  '/interventions/:id', 
  verifyToken, getInterventionById
);

interventionRouter.patch(
  '/interventions/:id/location', 
  verifyToken, patchInterventionLocation
);

interventionRouter.patch(
  '/interventions/:id/comment', 
  verifyToken, patchInterventionComment
);

interventionRouter.delete(
  '/interventions/:id', 
  verifyToken, deleteInterventionById
);

interventionRouter.patch(
  '/interventions/:id/status', 
  verifyToken, patchInterventionStatus
);

export default interventionRouter;