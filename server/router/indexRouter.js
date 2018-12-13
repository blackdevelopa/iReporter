import { Router } from 'express';
import redflagRouter from './redflagRouter';
import interventionRouter from './interventionRouter';
import userRouter from './userRouter';
const indexRouter = Router();

indexRouter.use('/api/v1/', redflagRouter);
indexRouter.use('/api/v1/', interventionRouter);
indexRouter.use('/', userRouter);

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