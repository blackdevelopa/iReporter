const dotenv = require('dotenv');

dotenv.config();

const config = {
  test:{
    connectionString: process.env.DATABASE_URL_TEST
  },
  development:{
    connectionString: process.env.DATABASE_URL
  }
}

module.exports = config;