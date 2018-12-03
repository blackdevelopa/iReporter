'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _incident = require('../models/incident');

var _incident2 = _interopRequireDefault(_incident);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// get all redflags
var IncidentController = {
  getAllIncidents: function getAllIncidents(req, res) {
    var all = [];
    _incident2.default.forEach(function (value) {
      all.push(value);
    });
    return res.status(200).send(all);
  },
  getAllRedflags: function getAllRedflags(req, res) {
    _incident2.default.forEach(function (incidents) {
      var redflags = [];
      if (incidents.type === 'redflag') {
        redflags.push(incidents);
        return res.status(200).send(redflags);
      }
    });
  },
  getAllInterventions: function getAllInterventions(req, res) {
    _incident2.default.forEach(function (incidents) {
      var interventions = [];
      if (incidents.type === 'intervention') {
        interventions.push(incidents);
        return res.status(200).send(interventions);
      }
    });
  },
  getSingleRedflag: function getSingleRedflag(req, res) {
    var redflagId = parseInt(req.params.id);
    _incident2.default.forEach(function (incidents) {
      var singleRedflag = [];
      if (incidents.id === redflagId) {
        console.log(redflagId);
        singleRedflag.push(incidents);
        console.log(singleRedflag);
        return res.status(200).json({ message: 'Specific redflag', singleRedflag: singleRedflag });
      } else {
        return 'no';
      }
    });
  }
};

exports.default = IncidentController;
//# sourceMappingURL=incident.js.map