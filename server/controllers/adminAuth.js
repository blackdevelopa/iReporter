import Helper from './helpers';
import db from '../db/indexdb';

const adminAuth = {
  /**
   * Admin Login
   * @param {object} req 
   * @param {object} res
   * @returns {object} user object 
   */
  async loginAdmin(req, res) {
    const getUser = 'SELECT * FROM users WHERE email = $1';
    try {
      const { rows } = await db.query(getUser, [req.body.email]);
      if (!rows[0]) {
        res.status(400).json({ status: 400,
          message: 'Email or Password is invalid'
        });
      }
      if(!Helper.passwordCheck(rows[0].password, req.body.password)) {
        res.status(400).json({ status: 400,
          message: 'Email or Password is invalid'
        });
      }
      const token = Helper.genToken(rows[0].id);
      res.status(200).json({ status: 200, data: [{ token, user: rows[0] }]
      });
    } catch(error) {
      return res.status(400).json(error)
    }
  },
}

export default adminAuth;