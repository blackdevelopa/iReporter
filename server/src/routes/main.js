import express from 'express';
import Redflag from '../controllers/redflag';

const router = express.Router();

router.post('/redflags', Redflag.createRedflag);

export default router;