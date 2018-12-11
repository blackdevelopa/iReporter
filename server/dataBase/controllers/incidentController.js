import db from '../db/indexdb';

const IncidentController = {
  /**
   * Create Redflags Incidence
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async createRedflags(req, res) {
    const text = `INSERT INTO
    incident(id, createdOn, createdBy, type, location, status, images, videos, comment)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
    returning *`;
    const values = [
      INTEGER,
      new Date(),
      req.body.createdBy,
      req.body.type,
      req.body.location,
      req.body.status,
      req.body.images,
      req.body.videos,
      req.body.comment
    ];
    console.log(values);
    try {
      const { rows } = await db.query(text, values);
      return res.status(201).json(rows[0]);
    }
    catch(err) {
      return res.status(400).json(err);
    }
  },

  /**
   * Get All Incidents
   * @param {object} req 
   * @param {object} res 
   * @returns {object} incident array
   */
  async getAll(req, res) {
    const findAllQuery = 'SELECT * FROM incident';
    try {
      const { rows, rowCount } = await db.query(findAllQuery);
      return res.status(200).send({ rows, rowCount });
    } catch(error) {
      return res.status(400).send(error);
    }
  },

}

export default IncidentController;
