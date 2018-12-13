import db from '../db/indexdb';

const redFlag = {
  /**
   * Create Redflags Incidence
   * @param {*} req
   * @param {*} res
   * @returns {object} incident object
   */

  async createRedflag(req, res) {
    const createQuery = `INSERT INTO incidents(createdOn, createdBy, type, location, status, images, videos, comment)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8)
    returning *`;
    const values = [
      new Date(),
      req.user.id,
      req.body.type,
      req.body.location,
      req.body.status,
      req.body.images,
      req.body.videos,
      req.body.comment
    ];
    
    try {
      const { rows } = await db.query(createQuery, values);
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
   * Get All Redflag Incidence
   * @param {object} req 
   * @param {object} res 
   * @returns {object} incident object
   */

  async getAllRedflags(req, res) {
    const findAllQuery = 'SELECT * FROM incidents WHERE createdBy = $1 AND type = $2';
    try {
      const {rows} = await db.query(findAllQuery, [req.user.id, 'redflag']);
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

  
  /**
   * Get Redflag redflag by id 
   * @param {object} req
   * @param {object} res
   * @returns {object} 
   */

   async getRedflagsById(req, res) {
     const findQueryById = 'SELECT * FROM incidents WHERE id=$1 AND createdBy = $2 AND type=$3';
     try {
       const { rows } = await db.query(findQueryById, [req.params.id, req.user.id, 'redflag']);
       if(!rows[0]) {
         return res.status(400).json({
           status: 400,
           message: 'There is no redflag here'
         });
       }
       return res.status(200).json({
        status: 200,
        data: rows[0] 
       });
     }
     catch(error) {
       return res.status(400).json({
         status: 400,
         err: error
       });
     }
   },


   /**
    * PATCH Redflag location
    */

    async patchRedflagLocation(req, res) {
      const findOneQuery = 'SELECT * FROM incidents WHERE id=$1 AND createdBy=$2 AND type=$3';
      const patchOneQuery = `UPDATE incidents SET location=$1 WHERE id=$2 AND createdBy=$3 returning *`;

      try {
        const { rows } = await db.query(findOneQuery, [req.params.id, req.user.id, 'redflag']);
        if(!rows[0]) {
          return res.status(400).json({
            status: 400,
            message: 'This redflag does not exist'
          });
        }
        const values = [
          req.body.location || rows[0].location,
          req.params.id,
          req.user.id
        ];

        const response = await db.query(patchOneQuery, values);
        return res.status(200).json({
          status: 200,
          data: [{
            id: response.rows[0].id,
            message: 'Updated red-flags location'
          }]
        });
      }
      catch (err) {
        return res.status(400).json({
          status: 400,
          message: error
        });
      }
    },


    async patchRedflagComment(req, res) {
      const findOneQuery = 'SELECT * FROM incidents WHERE id=$1 AND createdBy=$2 AND type=$3';
      const patchOneQuery = `UPDATE incidents SET comment=$1 WHERE id=$2 AND createdBy=$3 returning *`;

      try {
        const { rows } = await db.query(findOneQuery, [req.params.id, req.user.id, 'redflag']);
        if(!rows[0]) {
          return res.status(400).json({
            status: 400,
            message: 'This redflag does not exist'
          });
        }
        const values = [
          req.body.comment || rows[0].comment,
          req.params.id,
          req.user.id
        ];

        const response = await db.query(patchOneQuery, values);
        return res.status(200).json({
          status: 200,
          data: [{
            id: response.rows[0].id,
            message: 'Updated red-flags comment'
          }]
        });
      }
      catch (err) {
        return res.status(400).json({
          status: 400,
          message: error
        });
      }
    },


    async deleteRedflagById(req, res) {
      const deleteQuery = 'DELETE FROM incidents WHERE id=$1 AND createdBy=$2 AND type=$3 returning *';
      try {
        const { rows } = await db.query(deleteQuery, [req.params.id, req.user.id, 'redflag']);
        if(!rows[0]) {
          return res.status(400).json({
            status: 400,
            message: 'This red-reflag does not exist'
          });
        }
        return res.status(200).json({
          status: 200,
          data: [{
            id: rows[0].id,
            message: 'Red-flag record has been deleted successfully'
          }]
        });
      }
      catch(err) {
        return res.status(500).json({
          status: 500,
          message: 'Server is down. Please check back in a few minutes'
        });
      }
    }
};

export default redFlag;