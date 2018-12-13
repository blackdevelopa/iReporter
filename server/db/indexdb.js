import { Pool } from 'pg';
import dotenv from 'dotenv';
const config = require('./config');

dotenv.config();


const pool = (process.env.NODE_ENV === 'test')?(new Pool(config.test)):((new Pool(config.development)));


export default {
  /**
   * @param {object} req
   * @param {object} res
   * @returns {object} object
  */
  query(text, params) {
    return new Promise((resolve, reject) => {
      pool.query(text, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        })
    })
  }
}