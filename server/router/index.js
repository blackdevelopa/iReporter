import { Router } from 'express';
import redflagRouter from './redflagRouter';
import interventionRouter from './interventionRouter';
import userRouter from './userRouter';
const index = Router();

index.use('/api/v1/', redflagRouter);
index.use('/api/v1/', interventionRouter);
index.use('/api/v1/', userRouter);

index.get('/', (req, res) => {
  return res.redirect('/api/v1');
});

index.get('/api/v1', (req, res) => {
  return res.status(200).json({
    status: 200,
    message: 'Welcome to iReporter'
  });
});

index.all('/*', (req, res) => {
  res.status(404).json({
    status: 404,
    message: 'This is an invalid route. Please see proper documentation'
  });
});

export default index;
