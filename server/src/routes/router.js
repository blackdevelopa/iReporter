import express from 'express';
import IncidentController from '../controllers/IncidentController';

const router = express.Router();

router.get('/redflags', IncidentController.getAllRedflags);
router.get('/interventions', IncidentController.getAllInterventions);

export default router;
