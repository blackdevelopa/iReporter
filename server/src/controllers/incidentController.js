/* eslint-disable consistent-return */
import IncidentModel from '../models/IncidentModel';

const IncidentController = {
  getAllRedflags(req, res) {
    IncidentModel.forEach((incidents) => {
      const redflags = [];
      if (incidents.type === 'redflag') {
        redflags.push(incidents);
        return res.status(200).json(redflags);
      }
    });
  },

  getAllInterventions(req, res) {
    IncidentModel.forEach((incidents) => {
      const interventions = [];
      if (incidents.type === 'intervention') {
        interventions.push(incidents);
        return res.status(200).json(interventions);
      }
    });
  },
};


export default IncidentController;
