import { Router } from 'express';
import IncidentController from '../controllers/incidentController';

const { 
  getAllRedflags, getAllInterventions, 
  getSingleRedflag, getSingleIntervention, 
  createRedflag, createIntervention,
  updateSingleInterventionComment, updateSingleRedflagComment,
  updateSingleInterventionLocation, updateSingleRedflagLocation,
  deleteSingleRedflag, deleteSingleIntervention 
} = IncidentController;

const incidentRouter = Router();

incidentRouter.get(
  '/redflags', 
  getAllRedflags
);

incidentRouter.get(
  '/interventions', 
  getAllInterventions
);

incidentRouter.get(
  '/redflags/:id', 
  getSingleRedflag
);

incidentRouter.get(
  '/interventions/:id', 
  getSingleIntervention
);

incidentRouter.post(
  '/redflags', 
  createRedflag
);

incidentRouter.post(
  '/interventions', 
  createIntervention
);

incidentRouter.patch(
  '/redflags/:id/location', 
  updateSingleRedflagLocation
);

incidentRouter.patch(
  '/interventions/:id/location', 
  updateSingleInterventionLocation
);

incidentRouter.patch(
  '/redflags/:id/comment', 
  updateSingleRedflagComment
);

incidentRouter.patch(
  '/interventions/:id/comment', 
  updateSingleInterventionComment
);

incidentRouter.delete(
  '/redflags/:id', 
  deleteSingleRedflag
);

incidentRouter.delete(
  '/interventions/:id', 
  deleteSingleIntervention
);


export default incidentRouter;
