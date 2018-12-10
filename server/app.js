import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import indexRouter from './src/routes/indexRouter';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

const port = process.env.PORT || 3000;

app.use('/', indexRouter);


app.listen(port);

module.exports = app;
