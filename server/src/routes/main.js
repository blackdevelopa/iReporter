import express from 'express';
import IncidentController from '../controllers/incident';

const router = express.Router();

router.get('/incidents', IncidentController.getAllIncidents);
router.get('/redflags', IncidentController.getAllRedflags);
router.get('/interventions', IncidentController.getAllInterventions);


export default router;