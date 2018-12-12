import db from '../db/indexdb';

const redFlag = {
  /**
   * Create Redflags Incidence
   * @param {*} req
   * @param {*} res
   * @returns {object} incident object
   */

  async createRedflag(req, res) {
    const text = `INSERT INTO incidents(createdOn, createdBy, type, location, status, images, videos, comment)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8)
    returning *`;
    const values = [
      new Date(),
      +req.body.createdBy,
      req.body.type,
      req.body.location,
      req.body.status,
      req.body.images,
      req.body.videos,
      req.body.comment
    ];
    
    try {
      const { rows } = await db.query(text, values);
      return res.status(201).json({
        status: 201,
        data: rows[0]
      });
    } 
    catch(err) {
      return res.status(400).json({
        status: 400,
        message: 'There is an error in your post'
      });
    }
  },

  /**
   * Get All Incidents
   * @param {object} req 
   * @param {object} res 
   * @returns {object} incident object
   */

  async getAllRedflags(req, res) {
    const findAllQuery = 'SELECT * FROM incidents';
    try {
      const { rows } = await db.query(findAllQuery);
      return res.status(200).json({
        status: 200,
        data: rows 
      });
    } catch(error) {
      return res.status(400).json({
        status: 400,
        message: 'No data exist'
      });
    }
  },

}

export default redFlag;