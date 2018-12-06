'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _IncidentModel = require('../models/IncidentModel');

var _IncidentModel2 = _interopRequireDefault(_IncidentModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IncidentController = {
  getAllRedflags: function getAllRedflags(req, res) {
    _IncidentModel2.default.forEach(function (incidents) {
      var redflags = [];
      if (incidents.type === 'redflag') {
        redflags.push(incidents);
        return res.status(200).json(redflags);
      }
    });
  },
  getAllInterventions: function getAllInterventions(req, res) {
    _IncidentModel2.default.forEach(function (incidents) {
      var interventions = [];
      if (incidents.type === 'intervention') {
        interventions.push(incidents);
        return res.status(200).json(interventions);
      }
    });
  }
}; /* eslint-disable consistent-return */
exports.default = IncidentController;