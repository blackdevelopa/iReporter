import { Router } from 'express';
import incidentRouter from './incidentRouter';
const indexRouter = Router();

indexRouter.use('/api/v1/', incidentRouter);

indexRouter.get('/', (req, res) => {
  return res.status(200).json({
    status: 200,
    message: 'Welcome to iReporter'
  });
});

indexRouter.get('/*', (req, res) => {
  res.status(404).json({
    status: 404,
    message: 'This is an invalid route. Please see proper documentation'
  });
});


export default indexRouter;