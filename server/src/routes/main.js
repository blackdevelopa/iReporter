import express from 'express';
import IncidentController from '../controllers/incident';

const router = express.Router();

router.get('/redflags', IncidentController.getAll);

export default router;