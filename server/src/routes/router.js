import express from 'express';
import IncidentController from '../controllers/incidentController';

const router = express.Router();

router.get('/redflags', IncidentController.getAllRedflags);
router.get('/interventions', IncidentController.getAllInterventions);
// router.get('/redflags/:id', IncidentController.getSingleRedflag);

export default router;
