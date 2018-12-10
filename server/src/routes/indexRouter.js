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

indexRouter.get('/*', (req, res) => {
  return res.status(404).json({
    status: 404,
    message: 'This route is wrong. Please see the documentation for proper routing'
  });
});

indexRouter.patch('/*', (req, res) => {
  return res.status(404).json({
    status: 404,
    message: 'This route is wrong. Please see the documentation for proper routing'
  });
});

indexRouter.delete('/*', (req, res) => {
  return res.status(404).json({
    status: 404,
    message: 'This route is wrong. Please see the documentation for proper routing'
  });
});

indexRouter.post('/*', (req, res) => {
  return res.status(404).json({
    status: 404,
    message: 'This route is wrong. Please see the documentation for proper routing'
  });
});

export default indexRouter;

