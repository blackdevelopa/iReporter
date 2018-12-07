import express from 'express';
import IncidentController from '../controllers/Controller';

const router = express.Router();

router.get('/redflags', IncidentController.getAllRedflags);
router.get('/interventions', IncidentController.getAllInterventions);
router.get('/redflags/:id', IncidentController.getSingleRedflag);
router.get('/interventions/:id', IncidentController.getSingleIntervention);
router.post('/redflags', IncidentController.createRedflag);
router.post('/interventions', IncidentController.createIntervention);
router.patch('/redflags/:id/location', IncidentController.updateSingleRedflagLocation);
router.patch('/interventions/:id/location', IncidentController.updateSingleRedflagLocation);
router.patch('/redflags/:id/comment', IncidentController.updateSingleRedflagComment);
router.patch('/interventions/:id/comment', IncidentController.updateSingleInterventionComment);
router.delete('/redflags/:id', IncidentController.deleteSingleRedflag);
router.delete('/interventions/:id', IncidentController.deleteSingleIntervention);

export default router;
