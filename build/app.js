'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _router = require('./src/routes/router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _morgan2.default)('dev'));

var port = process.env.PORT || 3000;

app.use('/api/v1/', _router2.default);

app.get('/', function (req, res) {
  res.status(200).json({
    message: 'Welcome to iReporter'
  });
});

app.get('*', function (req, res) {
  res.status(400).json({
    message: 'Please see documentation for proper routes'
  });
});

app.listen(port);

module.exports = app;