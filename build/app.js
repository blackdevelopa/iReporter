'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

require('babel-polyfill');

var _indexRouter = require('./database/router/indexRouter');

var _indexRouter2 = _interopRequireDefault(_indexRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

_dotenv2.default.config();
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _morgan2.default)('dev'));

var port = process.env.PORT || 3000;

app.use(_indexRouter2.default);

app.listen(port);

module.exports = app;