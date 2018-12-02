import IncidentModel from '../models/incident';

// get all redflags
const IncidentController = {
  getAll(req, res) {
    const incidents = IncidentModel.findAll();
    return res.status(200).send(incidents);
  }
}

export default IncidentController;