import { Router } from 'express';
import incidentRouter from './incidentRouter';
const indexRouter = Router();

indexRouter.get('/', (req, res) => {
  return res.status(200).json({
    status: 200,
    message: 'Welcome to iReporter'
  });
});

indexRouter.use('/api/v1/', incidentRouter);

export default indexRouter;
