import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import 'babel-polyfill';

const app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'This is the iReporter application'
  });
});

app.get('/*', (req, res) => {
  res.status(404).json({
    status: 404,
    message: 'This is an invalid route. Please see proper documentation'
  })
})


app.listen(port);

module.exports = app;
