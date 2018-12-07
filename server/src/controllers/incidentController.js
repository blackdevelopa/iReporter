import IncidentModel from '../models/incidentModel';

/**
 * Get All Red-flags
 * @param {object} req The request Object from the user
 * @param {object} res The response Object from the user
 */

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

/**
 * Get All Interventions
 * @param {object} req The request Object from the user
 * @param {object} res The response Object from the user
 */

  getAllInterventions(req, res) {
    IncidentModel.forEach((incidents) => {
      const interventions = [];
      if (incidents.type === 'intervention') {
        interventions.push(incidents);
        return res.status(200).json({ message: 'all interventions', interventions: interventions});
      }
    });
  },

  /**
   * Get Single Redflags
   * @param {object} req The request Object from the user
   * @param {object} res The response Object from the user
  */

  getSingleRedflag(req, res) {
    const redflagId = parseInt(req.params.id);    
    IncidentModel.forEach((incidents) => {
      const singleRedflag = [];
      if (incidents.id === redflagId) {
        singleRedflag.push(incidents);
        return res.status(200).json({ message: 'Specific redflag', singleRedflag });
      }
    });
  },

  /**
   * Get Single Interventions
   * @param {object} req The request Object from the user
   * @param {object} res The response Object from the user
  */

  getSingleIntervention(req, res) {
    const interventionId = parseInt(req.params.id);
    IncidentModel.forEach((incidents) => {
      const singleIntervention = [];
      if (incidents.id === interventionId) {
        singleIntervention.push(incidents);
        return res.status(200).json({ message: 'Specific intervention', singleIntervention });
      }
    });
  },

  /**
   * Update Redflags location
   * @param {object} req The request Object from the user
   * @param {object} res The response Object from the user
  */

  updateSingleRedflagLocation(req, res) {
    const redflagId = parseInt(req.params.id);
    IncidentModel.forEach((incidents) => {
      if (incidents.id === redflagId) {
        incidents.location = req.body.location;
        return res.status(201).json({ message: 'updated location', location: incidents.location});
      }
    });
  },

  /**
   * Update Interventions location
   * @param {object} req The request Object from the user
   * @param {object} res The response Object from the user
  */

  updateSingleInterventionLocation(req, res) {
    const interventionId = parseInt(req.params.id);
    IncidentModel.forEach((incidents) => {
      if (incidents.id === interventionId) {
        incidents.location = req.body.location;
        return res.status(201).json({ message: 'updated location', location: incidents.location});
      }
    });
    },

  /**
   * update Redflags comment
   * @param {object} req The request Object from the user
   * @param {object} res The response Object from the user
  */

  updateSingleRedflagComment(req, res) {
    const redflagId = parseInt(req.params.id);
    IncidentModel.forEach((incidents) => {
      if (incidents.id === redflagId) {
        incidents.comment = req.body.comment;
        return res.status(201).json({ message: 'updated comment', comment: incidents.comment});
      }
    });
  },

  /**
   * update Interventions comment
   * @param {object} req The request Object from the user
   * @param {object} res The response Object from the user
  */

  updateSingleInterventionComment(req, res) {
    const interventionId = parseInt(req.params.id);
    IncidentModel.forEach((incidents) => {
      if (incidents.id === interventionId) {
        incidents.comment = req.body.comment;
        return res.status(201).json({ message: 'updated comment', comment: incidents.comment});
      }
    });
  },

  /**
   * delete specific Redflags
   * @param {object} req The request Object from the user
   * @param {object} res The response Object from the user
  */

  deleteSingleRedflag(req, res) {
    const redflagId = parseInt(req.params.id);
    IncidentModel.forEach((incidents) => {
      const deleteRedflag = [];
      if (incidents.id === redflagId) {
        deleteRedflag.splice(redflagId);
        return res.status(201).json({ message: 'redflag deleted', deleteRedflag});
      }
    });
  },

  /**
   * delete specific Intervention
   * @param {object} req The request Object from the user
   * @param {object} res The response Object from the user
  */

 deleteSingleIntervention(req, res) {
  const interventionId = parseInt(req.params.id);
  IncidentModel.forEach((incidents) => {
    const deleteIntervention = [];
    if (incidents.id === interventionId) {
      deleteIntervention.splice(interventionId);
      return res.status(201).json({ message: 'intervention deleted', deleteIntervention});
    }
  });
},

  /**
   * create Redflags 
   * @param {object} req The request Object from the user
   * @param {object} res The response Object from the user
  */

  createRedflag(req, res) {
    const newRedflags = [];
    IncidentModel.forEach((incidents) => {
      const incidentsId = incidents.id++;
      const newRedflag = req.body;
      if (incidents.id === incidentsId) {
        newRedflag.push(
          createdOn,
          createdBy,
          type,
          location,
          status,
          images,
          videos,
          comment
        );
      }
    });
    return res.status(201).json({ message: 'new redflag', newRedflags});
  },

  /**
   * create Interventions 
   * @param {object} req The request Object from the user
   * @param {object} res The response Object from the user
  */

 createIntervention(req, res) {
  const newInterventions = [];
  IncidentModel.forEach((incidents) => {
    const incidentsId = incidents.id++;
    const newIntervention = req.body;
    if (incidents.id === incidentsId) {
      newIntervention.push(
        createdOn,
        createdBy,
        type,
        location,
        status,
        images,
        videos,
        comment
      );
    }
  });
  return res.status(201).json({ message: 'new intervention', newInterventions});
}
};


export default IncidentController;
