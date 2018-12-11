import { Router } from 'express';
import IncidentController from '../controllers/incidentController';

const { 
  create, getAll
} = IncidentController;

const incidentRouter = Router();

incidentRouter.get(
  '/incidences', 
  getAll
);

incidentRouter.post(
  '/incidences', 
  create
);

export default incidentRouter;
