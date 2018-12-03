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

  getSingleRedflag(req, res) {
    const redflagId = parseInt(req.params.id);    
    IncidentModel.forEach((incidents) => {
      const singleRedflag = [];
      if (incidents.id === redflagId) {
        console.log(redflagId);
        singleRedflag.push(incidents);
        console.log(singleRedflag);
        return res.status(200).json({message: 'Specific redflag', singleRedflag});
      } else {
        return 'no';
      }
    });
  }
};


export default IncidentController;