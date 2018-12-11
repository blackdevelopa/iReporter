import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import 'babel-polyfill';
// import inMemory from './inMemory/src/controllers/incidentController';
// import dataBase from './dataBase/controllers/incidentController';
import indexRouter from './dataBase/router/indexRouter';

const app = express();

dotenv.config();
// const Incident = process.env.TYPE === 'db' ? dataBase : inMemory;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

const port = process.env.PORT || 3000;

app.use('/', indexRouter);


app.listen(port);

module.exports = app;
