import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import swaggerUI from 'swagger-ui-express';
import cors from 'cors';
import doc from '../doc.json';
import dotenv from 'dotenv';
import 'babel-polyfill';
import router from './router/index';

const app = express();

dotenv.config();
app.use(
    cors({
      origin: "*",
      methods: "GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS",
      preflightContinue: false,
      optionsSuccessStatus: 204
    })
  );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

const port = process.env.PORT || 3000;

// serve swagger doc
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(doc));

app.use(router);

app.listen(port);

module.exports = app;