import Helper from './helpers';
import db from '../db/indexdb';

const userAuth = {
  /**
   * Create A User
   * @param {object} req 
   * @param {object} res
   * @returns {object} returns a user object
   */

  async createUser(req, res) {
    const hashPassword = Helper.hash(req.body.password);
    const isAdmin = false;
    const phone = req.body.phoneNumber;
    const username = req.body.username;

    if (!Helper.validPhone(phone)) {
      return res.status(400).json({
        status: 400,
        message: 'Oops. This does not look like a proper phone number'
      });
    }
    if (!req.body.email) {
      return res.status(400).json({
        status: 400,
        message: 'Enter your email'
      });
    }
    if (!Helper.validEmail(req.body.email)) {
      return res.status(400).json({
        status: 400,
        message: 'Oops. This email is not valid'
      });
    }

    const createUser = `INSERT INTO
      users(firstname, lastname, othernames, email, phoneNumber, username, registered, isAdmin, password)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
      returning *`;
    const values = [
      req.body.firstname.trim(),
      req.body.lastname.trim(),
      req.body.othernames.trim(),
      req.body.email,
      req.body.phoneNumber,
      req.body.username.trim(),
      new Date(),
      isAdmin,
      hashPassword
    ];

    try {
      const { rows } = await db.query(createUser, values);
      const token = Helper.genToken(rows[0]);
      return res.status(201).json({ 
        status: 201,
        data: [{
          token,
          user: rows[0]
        }]
      });
    } catch(error) {
      if (error.code === '23505') {
        return res.status(400).json({ 
          status: 400,
          message: 'This user already exists'
        });
      }
      return res.status(400).json(error.message);
    } 
  },

  /**
   * User Login
   * @param {object} req 
   * @param {object} res
   * @returns {object} user object 
   */
  async loginUser(req, res) {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({
        status: 400,
        message: 'Email or Password is missing'
      });
    }
    const getUser = 'SELECT * FROM users WHERE email = $1';
    try {
      const { rows } = await db.query(getUser, [req.body.email]);
      if (!rows[0]) {
        return res.status(400).json({
          status: 400,
          message: 'Email or Password is invalid'
        });
      }
      if(!Helper.passwordCheck(rows[0].password, req.body.password)) {
        return res.status(400).json({ 
          status: 400,
          message: 'Email or Password is invalid'
        });
      }
      const token = Helper.genToken(rows[0].id);
      return res.status(200).json({
        status: 200,
        data: [{
          token,
          user: rows[0]
        }]
      });
    } catch(error) {
      return res.status(400).json(error)
    }
  },
}

export default userAuth;