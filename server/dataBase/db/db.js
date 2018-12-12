const config = require('./config');
const { Pool } = require('pg');
const dotenv = require('dotenv');


dotenv.config();

const pool = (process.env.NODE_ENV === 'test')?(new Pool(config.test)):((new Pool(config.development)));

pool.on('connect', () => {
  console.log('connected');
});

const createTables = () => {
  const queryText = 
    `CREATE TABLE IF NOT EXISTS
    incidents(
      id SERIAL PRIMARY KEY,
      createdOn TIMESTAMP NOT NULL,
      createdBy INTEGER NOT NULL,
      type TEXT NOT NULL,
      location TEXT NOT NULL,
      status TEXT NOT NULL,
      images TEXT NOT NULL,
      videos TEXT NOT NULL,
      comment TEXT NOT NULL
    )`;

    pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      pool.end();
    });
}

// Drop off Table
const dropTables = () => {
  const queryText = 'DROP TABLE IF EXISTS incidents';
  pool.query(queryText)
  .then((res) => {
    pool.end();
  })
  .catch((err) => {
    pool.end();
  });
}

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

module.exports = {
  createTables,
  dropTables
};

require('make-runnable');