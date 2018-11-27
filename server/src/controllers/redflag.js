import RedflagModel from '../models/redflag';

const Redflag = {
  createRedflag(req, res) {
    if(!req.body.comment) {
      return res.status(400).json({
        message: 'Add all fields',
      });
    }
    const redflag = RedflagModel.create(req.body);
    return res.status(201).send(redflag);
  }
}


export default Redflag;