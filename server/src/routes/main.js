import express from 'express';
import IncidentController from '../controllers/incident';

const router = express.Router();

router.get('/incidents', IncidentController.getAll);

export default router;