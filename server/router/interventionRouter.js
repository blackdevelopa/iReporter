import { Router } from 'express';
import intervention from '../controllers/intervention';
import Validate from '../middleware/validate';
const interventionRouter = Router();

const { 
  createIntervention, getAllIntervention, 
  getInterventionById, patchInterventionLocation, 
  patchInterventionComment, deleteInterventionById 
} = intervention;

const { verifyToken } = Validate;

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

export default interventionRouter;