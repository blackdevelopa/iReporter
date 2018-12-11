import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import 'babel-polyfill';
import router from './database/router/indexRouter';

const app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

const port = process.env.PORT || 3000;

app.use(router);

app.listen(port);

module.exports = app;
