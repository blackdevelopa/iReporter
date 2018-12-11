import { Router } from 'express';
import redFlag from '../controllers/redFlag';
const incidentRouter = Router();

const { 
  createRedflag 
} = redFlag;

incidentRouter.post(
  '/red-flags', 
  createRedflag
);

export default incidentRouter;