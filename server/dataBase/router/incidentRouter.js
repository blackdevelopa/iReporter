import { Router } from 'express';
import IncidentController from '../controllers/incidentController';
const incidentRouter = Router();


const { createRedflags, getAll } = IncidentController;

incidentRouter.get('/incidences', getAll);
incidentRouter.post('/incidences', createRedflags);

export default incidentRouter;