import IncidentModel from '../models/incidentModel';

/**
 * Get All Redflags.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {
}

const incidentController = {


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

  getSingleRedflag(req, res) {
    const redflagId = parseInt(req.params.id);
    IncidentModel.forEach((incidents) => {
      const singleRedflag = [];
      if (incidents.id === redflagId) {
        console.log(redflagId);
        singleRedflag.push(incidents);
        console.log(singleRedflag);
        return res.status(200).json({ message: 'Specific redflag', singleRedflag });
      }
      return res.status(400).json({ message: 'An error occured' });
    });
  },
};

export default incidentController;
