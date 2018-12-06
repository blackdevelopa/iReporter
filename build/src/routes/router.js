'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _IncidentController = require('../controllers/IncidentController');

var _IncidentController2 = _interopRequireDefault(_IncidentController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/redflags', _IncidentController2.default.getAllRedflags);
router.get('/interventions', _IncidentController2.default.getAllInterventions);

exports.default = router;