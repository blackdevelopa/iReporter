import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const Helper = {

  /**
   * Hash Password with bcrypt and salting
   * @param {string} password 
   * @returns {string} returns hash
   */

  hash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  },

  /**
   * Check Password
   * @param {string} hash 
   * @param {string} password 
   */

  passwordCheck(hash, password) {
    return bcrypt.compareSync(password, hash);
  },

  /**
   * Validate Email Address
   * @param {string} email 
   * @returns {boolean} returns a true or false
   */

  validEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
  },

  /**
   * Generates the required token
   * @param {string} id 
   */

   genToken(id) {
    const token = jwt.sign({
      userId: id
    }, 
    process.env.HIDDENKEY, { expiresIn: '2hr' }
    );
    return token;
  }
}

export default Helper;