import db from '../db/indexdb';

const adminController = { 
  /**
   * Admin can edit red-flag status
   * @param {string} req 
   * @param {object} res 
   */
  async patchRedflagStatus(req, res) {
    const findOneQuery = 'SELECT * FROM incidents WHERE id=$1 AND type=$2';
    const findOneAdmin = 'SELECT * FROM users WHERE id=$1 AND isAdmin=$2';
    const patchOneQuery = `UPDATE incidents SET status=$1 WHERE id=$2 returning *`;

    try {
      const { rows } = await db.query(findOneAdmin, [req.user.id, 'true']);
      if(rows.length === 0){
        return res.status(400).json({
          status: 400,
          message: 'Not an Admin'
        })
      }
      const { rows:response } = await db.query(findOneQuery, [req.params.id, 'redflag']);
      if(!response[0]) {
        return res.status(400).json({
          status: 400,
          message: 'This red-flag does not exist'
        });
      }
      const values = [
        req.body.status || response[0].status,
        req.params.id
      ];
      
      const { rows:respond } = await db.query(patchOneQuery, values);
      return res.status(200).json({
        status: 200,
        data: [{
          id: respond[0].id,
          message: 'Updated redflag record status'
        }]
      });
    }
    catch (err) {
      return res.status(400).json({
        status: 400,
        message: err
      });
    }
  },

  /**
   * Admin can edit intervention status
   */

  async patchInterventionStatus(req, res) {
    const findOneQuery = 'SELECT * FROM incidents WHERE id=$1 AND type=$2';
    const findOneAdmin = 'SELECT * FROM users WHERE id=$1 AND isAdmin=$2';
    const patchOneQuery = `UPDATE incidents SET status=$1 WHERE id=$2 returning *`;

    try {
      const { rows } = await db.query(findOneAdmin, [req.user.id, 'true']);
      if(rows.length === 0){
        return res.status(400).json({
          status: 400,
          message: 'Not an Admin'
        })
      }
      const { rows:response } = await db.query(findOneQuery, [req.params.id, 'intervention']);
      if(!response[0]) {
        return res.status(400).json({
          status: 400,
          message: 'This intervention does not exist'
        });
      }
      const values = [
        req.body.status || response[0].status,
        req.params.id
      ];
      
      const { rows:respond } = await db.query(patchOneQuery, values);
      return res.status(200).json({
        status: 200,
        data: [{
          id: respond[0].id,
          message: 'Updated intervention record status'
        }]
      });
    }
    catch (err) {
      return res.status(400).json({
        status: 400,
        message: err
      });
    }
  },
};

export default adminController;