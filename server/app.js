import express from 'express';
import bodyParser from 'body-parser';
import mainRoutes from './src/routes/main';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;

app.use('/api/v1/', mainRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to iReporter',
  })
})

app.get('*', (req, res) => {
  res.status(400).json({
    message: 'Please see documentation for proper routes',
  })
})

app.listen(port, (req, res) => {
  console.log('working');
});

module.exports = app;