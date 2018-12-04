import express from 'express';
import IncidentController from '../controllers/incidentController';

const router = express.Router();

router.get('/incidents', IncidentController.getAllIncidents);
router.get('/redflags', IncidentController.getAllRedflags);
router.get('/interventions', IncidentController.getAllInterventions);
router.get('/redflags/:id', IncidentController.getSingleRedflag);

export default router; 






