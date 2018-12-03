'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _incident = require('../controllers/incident');

var _incident2 = _interopRequireDefault(_incident);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/incidents', _incident2.default.getAllIncidents);
router.get('/redflags', _incident2.default.getAllRedflags);
router.get('/interventions', _incident2.default.getAllInterventions);
router.get('/redflags/:id', _incident2.default.getSingleRedflag);

exports.default = router;
//# sourceMappingURL=main.js.map