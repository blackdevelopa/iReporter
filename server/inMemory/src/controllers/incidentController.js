import IncidentModel from '../models/incidentModel';


const IncidentController = {

  /**
   * Get All Red-flags
   * @param {object} req The request Object from the user
   * @param {object} res The response Object from the user
   */
  
   getAllRedflags(req, res) {
    const redflags = [];
    IncidentModel.forEach((incidents) => {
      if (incidents.type === 'redflag') {
        redflags.push(incidents);
      }
    });
    return res.status(200).json({
      status: 200,
      data: redflags
    });
  },

/**
 * Get All Interventions
 * @param {object} req The request Object from the user
 * @param {object} res The response Object from the user
 */

  getAllInterventions(req, res) {
    const interventions = [];
    IncidentModel.forEach((incidents) => {
      if (incidents.type === 'intervention') {
        interventions.push(incidents);
      }
    });
    return res.status(200).json({
      status: 200,
      data: interventions
    });
  },

  /**
   * Get Single Redflags
   * @param {object} req The request Object from the user
   * @param {object} res The response Object from the user
  */

  getSingleRedflag(req, res) {
    const redflagId = parseInt(req.params.id);
    if(!Number(req.params.id)) {
      return res.status(400).json({
        status: 400,
        message: 'This Id is invalid'
      });
    };
    const singleRedflag = [];
    IncidentModel.forEach((incidents) => {
      if (incidents.id === redflagId && 
        incidents.type === 'redflag') {
        singleRedflag.push(incidents);
      }
    });
    if (singleRedflag.length >= 1) {
      return res.status(200).json({
        status: 200,
        data: singleRedflag
      });
    }
    return res.status(404).json({
      status: 404,
      message: 'This Id does not exist in the database'
    });
  },

  /**
   * Get Single Interventions
   * @param {object} req The request Object from the user
   * @param {object} res The response Object from the user
  */

 getSingleIntervention(req, res) {
  const interventionId = parseInt(req.params.id);
  if(!Number(req.params.id)) {
    return res.status(400).json({
      status: 400,
      message: 'This Id is invalid'
    });
  }
  const intervention = [];
  IncidentModel.forEach((incidents) => {
    if (incidents.id === interventionId && 
      incidents.type === 'intervention') {
      intervention.push(incidents);
    }
  });
  if (intervention.length >= 1) {
    return res.status(200).json({
      status: 200,
      data: intervention
    });
  }
  return res.status(404).json({
    status: 404,
    message: 'This Id does not exist in the database'
  });
},

  /**
   * Update Redflags location
   * @param {object} req The request Object from the user
   * @param {object} res The response Object from the user
  */

 updateSingleRedflagLocation(req, res) {
  const redflagId = parseInt(req.params.id);
  const newLocation = [];
  IncidentModel.forEach((incidents) => {
    if (incidents.id === redflagId && 
        incidents.type === 'redflag') {
      incidents.location = req.body.location;
      newLocation.push(incidents.location)
    }
  });
  if(!Number(redflagId)) {
    return res.status(400).json({
      status: 400,
      message: 'The Id is invalid'
    });
  }
  if(!req.body.location) {
    return res.status(400).json({
      status: 400,
      message: 'Please enter the new redflag location'
    });
  }
  if(newLocation.length >= 1) {
    return res.status(200).json({ 
      status: 200,
      data: [{
        id: redflagId,
        message: 'Updated red-flag record\'s location'
      }]
    });
  }
  return res.status(404).json({
    status: 404,
    message: 'This Id does not exist in the database'
  });
  },

  /**
   * Update Interventions location
   * @param {object} req The request Object from the user
   * @param {object} res The response Object from the user
  */

  updateSingleInterventionLocation(req, res) {
    const interventionId = parseInt(req.params.id);
    const newLocation = [];
    if(!Number(req.params.id)) {
      return res.status(400).json({
        status: 400,
        message: 'The Id is invalid'
      });
    }
    if(!req.body.location) {
      return res.status(400).json({
        status: 400,
        message: 'Please enter the new intervention location'
      });
    }
    IncidentModel.forEach((incidents) => {
      if (incidents.id === interventionId &&
          incidents.type === 'intervention') {
        incidents.location = req.body.location;
        newLocation.push(incidents.location);
      }
    });
    if (newLocation.length >= 1) {
      return res.status(200).json({
        status: 200,
        data: [{
          id: interventionId,
          message: 'Updated intervention record\'s location'
        }]
      });
    }
    return res.status(404).json({ 
      status: 404,
      message: 'This Id does not exist in the database' 
    });
  },

  /**
   * update Redflags comment
   * @param {object} req The request Object from the user
   * @param {object} res The response Object from the user
  */

 updateSingleRedflagComment(req, res) {
  const redflagId = parseInt(req.params.id);
  const newComment = [];
  if(!Number(req.params.id)) {
    return res.status(400).json({
      status: 400,
      message: 'The Id is invalid'
    });
  }
  if(!req.body.comment) {
    return res.status(400).json({
      status: 400,
      message: 'Please enter the new redflag comment'
    });
  }
  IncidentModel.forEach((incidents) => {
    if (incidents.id === redflagId &&
        incidents.type === 'redflag') {
      incidents.comment = req.body.comment;
      newComment.push(incidents.location);
    }
  });
  if (newComment.length >= 1) {
    return res.status(200).json({
      status: 200,
      data: [{
        id: redflagId,
        message: 'Updated red-flag record\'s comment'
      }]
    });
  }
  return res.status(404).json({ 
    status: 404,
    message: 'This Id does not exist in the database'
  });
  },

  /**
   * update Interventions comment
   * @param {object} req The request Object from the user
   * @param {object} res The response Object from the user
  */

 updateSingleInterventionComment(req, res) {
  const interventionId = parseInt(req.params.id);
  const newComment = [];
  if(!Number(req.params.id)) {
    return res.status(400).json({
      status: 400,
      message: 'The Id is invalid'
    });
  }
  if(!req.body.comment) {
    return res.status(400).json({
      status: 400,
      message: 'Please enter the new intervention comment'
    });
  }
  IncidentModel.forEach((incidents) => {
    if (incidents.id === interventionId &&
        incidents.type === 'intervention') {
      incidents.comment = req.body.comment;
      newComment.push(incidents.comment);
    }
  });
  if (newComment.length >= 1) {
    return res.status(200).json({
      status: 200,
      data: [{
        id: interventionId,
        message: 'Updated intervention record\'s comment'
      }]
    });
  }
  return res.status(404).json({ 
    status: 404,
    message: 'This Id does not exist in the database'
  });
  },

  /**
   * delete specific Redflags
   * @param {object} req The request Object from the user
   * @param {object} res The response Object from the user
  */

  deleteSingleRedflag(req, res) {
    const redflagId = parseInt(req.params.id);
    if(!Number(req.params.id)) {
      return res.status(400).json({
        status: 404,
        message: 'This Id is invalid'
      });
    }
    const deleteRedflag = [];
    IncidentModel.forEach((incidents) => {
      if (incidents.id === redflagId && 
        incidents.type === 'redflag') {
        deleteRedflag.push(incidents);
      }
    });
    IncidentModel.push(deleteRedflag);
    return res.status(201).json({
      status: 201,
      data: [{
        id: redflagId,
        message: 'redflag deleted',
      }]
    });
  },

  /**
   * delete specific Intervention
   * @param {object} req The request Object from the user
   * @param {object} res The response Object from the user
  */

  deleteSingleIntervention(req, res) {
    const interventionId = parseInt(req.params.id);
    if(!Number(req.params.id)) {
      return res.status(400).json({
        status: 404,
        message: 'This Id is invalid'
      });
    }
    const deleteIntervention = [];
    IncidentModel.forEach((incidents) => {
      if (incidents.id === interventionId &&
          incidents.type === 'intervention') {
          deleteIntervention.splice(incidents);
        }
    });
    IncidentModel.push(deleteIntervention);
    return res.status(201).json({
      status: 201,
      data: [{
        id: interventionId,
        message: 'intervention deleted',
      }]
    });
  },

  /**
   * create Redflags 
   * @param {object} req The request Object from the user
   * @param {object} res The response Object from the user
  */

  createRedflag(req, res) {
    const newRedflagId = [];
    IncidentModel.forEach((incidents) => {
      if (incidents.type === 'redflag') {
        const redflagId = ++incidents.id;
        newRedflagId.push(redflagId);
      }
    });
    const newRedflag = {
      id: ++newRedflagId.length,
      createdBy: 1,
      createdOn: new Date(),
      type: 'redflag',
      location: req.body.location,
      status: 'draft',
      images: req.body.file,
      videos: req.body.videos,
      comment: req.body.comment
    };
    IncidentModel.push(newRedflag);
    return res.status(201).json({
      status: 201,
      data: [{
        id: newRedflag.id,
        message: 'Created red-flag record'
      }]
    });
    },
  /**
   * create Interventions 
   * @param {object} req The request Object from the user
   * @param {object} res The response Object from the user
  */

  createIntervention(req, res) {
    const newInterventionId = [];
    IncidentModel.forEach((incidents) => {
      if(incidents.type === 'intervention') {
        const interventionId = ++incidents.id;
        newInterventionId.push(interventionId);
      }
    });
    const newIntervention = {
      id: ++newInterventionId.length,
      createdBy: 2,
      createdOn: new Date(),
      type: 'intervention',
      location: req.body.location,
      status: 'draft',
      images: req.body.file,
      videos: req.body.videos,
      comment: req.body.comment
    };
    IncidentModel.push(newIntervention);
    return res.status(201).json({
      status: 201,
      data: [{
        id: newIntervention.id,
        message: 'Created intervention record'
      }]
    });
  }
};


export default IncidentController;
