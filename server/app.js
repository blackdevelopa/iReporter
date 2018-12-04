import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import Routes from './src/routes/router';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

const port = 3000;

app.use('/api/v1/', Routes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to iReporter',
  });
});

app.get('*', (req, res) => {
  res.status(400).json({
    message: 'Please see documentation for proper routes',
  });
});

app.listen(port);

export default app;
