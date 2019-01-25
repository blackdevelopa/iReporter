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
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email)
  },

  validPhone(phone) {
    return /^\d{11}$/.test(phone)
  },

  validUsername(username) {
    return /^[a-zA-Z]+$/.test(username)
  },

  validName(firstname) {
    if(firstname.length <= 30) {
      return true;
    }
  },
  validName(lastname) {
    if(lastname.length <= 30) {
      return true;
    }
  },
  validName(othernames) {
    if(othernames.length <= 30) {
      return true;
    }
  },
  usernameLength(username) {
    if(username.length <= 30) {
      return true;
    }
  },

  genToken(id) {
    const token = jwt.sign({
      userId: id
    }, 
    process.env.HIDDENKEY, { expiresIn: '24hr' }
    );
    return token;
  },
}


export default Helper;