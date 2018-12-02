import express from 'express';
import { getAllRedflags } from '../controllers/incident';

const router = express.Router();

router.get('/redflags', getAllRedflags);

export default router;