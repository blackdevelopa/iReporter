import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const Helper = {
  // has password
  hash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  },

  // compare password
  passwordCheck(hash, password) {
    return bcrypt.compareSync(password, hash);
  },

  // validateEmail
  validEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
  },

  // generate token
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