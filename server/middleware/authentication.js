import jwt from 'jsonwebtoken';
import db from '../db/indexdb';
import dotenv from 'dotenv';

dotenv.config();

const Validate = {
  // Validate token

  async verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if(!token) {
      return res.status(400).json({
        status: 400,
        message: 'You are not authorized to view this route'
      });
    }
    try {
      const decoded = await jwt.verify(token, process.env.HIDDENKEY);
      const text = 'SELECT * FROM users WHERE id = $1';
      const { rows } = await db.query(text, [decoded.userId]);
      if(!rows[0]) {
        return res.status(400).json({
          status: 400,
          message: 'This token is invalid'
        });
      }
      req.user = { id: decoded.userId };
      next();
    } catch(error) {
      return res.status(400).json(error);
    }
  }
}

export default Validate;