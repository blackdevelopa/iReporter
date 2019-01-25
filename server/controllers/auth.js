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
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const othernames = req.body.othernames;
    const phone = req.body.phoneNumber;
    const username = req.body.username;

    if (!firstname) {
      return res.status(400).json({
        status: 400,
        message: 'Enter your firstname'
      });
    }
    if (/\s/.test(firstname)) {
      return res.status(400).json({
        status: 400,
        message: 'No spaces please, just your first name.'
      });
    }
    if (!lastname) {
      return res.status(400).json({
        status: 400,
        message: 'Enter your lastname'
      });
    }
    if (/\s/.test(lastname)) {
      return res.status(400).json({
        status: 400,
        message: 'No spaces please, just your last name.'
      })
    }
    if (!othernames) {
      return res.status(400).json({
        status: 400,
        message: 'Enter your othernames'
      });
    }
    if (/\s/.test(othernames)) {
      return res.status(400).json({
        status: 400,
        message: 'No spaces please, just your other name.'
      });
    }
    if (!Helper.validPhone(phone)) {
      return res.status(400).json({
        status: 400,
        message: 'Oops. This does not look like a proper phone number'
      });
    }
    if (!Helper.validUsername(username)) {
      return res.status(400).json({
        status: 400,
        message: 'Oops. This username should only have alphabets'
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
    if(!Helper.validName(firstname)) {
      if (true) return res.status(400).json({
        status: 400,
        message: 'Is your first name really that long? The accepted limit is actually 30.'
      });
    }
    if(!Helper.validName(lastname)) {
      if (true) return res.status(400).json({
        status: 400,
        message: 'Is your last name really that long? The accepted limit is actually 30.'
      });
    }
    if(!Helper.validName(othernames)) {
      if (true) return res.status(400).json({
        status: 400,
        message: 'Is your other name really that long? The accepted limit is actually 30.'
      });
    }
    if(!Helper.usernameLength(username)) {
      if (true) return res.status(400).json({
        status: 400,
        message: 'Your username should not be that long? The accepted limit is actually 30.'
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
   * Login
   * @param {object} req 
   * @param {object} res
   * @returns {object} user object 
   */
  async loginUser(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    if (/\s/.test(email)) {
      return res.status(400).json({
        status: 400,
        message: 'No spaces please, just your email.'
      });
    }
    if (/\s/.test(password)) {
      return res.status(400).json({
        status: 400,
        message: 'No spaces please, just your password.'
      });
    }
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({
        status: 400,
        message: 'Email or Password is missing'
      });
    }
    if (!Helper.validEmail(req.body.email)) {
      return res.status(400).json({
        status: 400,
        message: 'Enter a valid email'
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

  /**
   * Admin Login
   * @param {object} req 
   * @param {object} res
   * @returns {object} user object 
   */
  async loginAdmin(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    if (/\s/.test(email)) {
      return res.status(400).json({
        status: 400,
        message: 'No spaces please, just your email.'
      });
    }
    if (/\s/.test(password)) {
      return res.status(400).json({
        status: 400,
        message: 'No spaces please, just your password.'
      });
    }
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({
        status: 400,
        message: 'Email or Password is missing'
      });
    }
    if (!Helper.validEmail(req.body.email)) {
      return res.status(400).json({
        status: 400,
        message: 'Enter a valid email'
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