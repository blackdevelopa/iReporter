import IncidentModel from '../models/incident';

// get all redflags
const IncidentController = {
  getAllIncidents(req, res) {
    const all = [];
    IncidentModel.forEach((value) => {
      all.push(value);
    });
    return res.status(200).send(all);
  },

  getAllRedflags(req, res) {
    IncidentModel.forEach((incidents) => {
      const redflags = [];
      if (incidents.type === 'redflag') {
        redflags.push(incidents);
        return res.status(200).send(redflags);
      }
    });
  },

  getAllInterventions(req, res) {
    IncidentModel.forEach((incidents) => {
      const interventions = [];
      if (incidents.type === 'intervention') {
        interventions.push(incidents);
        return res.status(200).send(interventions);
      }
    });
  },
};


export default IncidentController;