const config = require('./config');
const { Pool } = require('pg');
const dotenv = require('dotenv');


dotenv.config();

const pool = (process.env.NODE_ENV === 'test')?(new Pool(config.test)):((new Pool(config.development)));

pool.on('connect', () => {
  console.log('connected');
});

/**
 * Create Inicident Table
 */
const createIncidentTable = () => {
  const queryText = 
    `CREATE TABLE IF NOT EXISTS
    incidents(
      id SERIAL PRIMARY KEY,
      createdOn TIMESTAMP NOT NULL,
      createdBy FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
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

/**
 * Create User Table
 */
const createUserTable = () => {
  const queryText =
    `CREATE TABLE IF NOT EXISTS
      users(
        id SERIAL PRIMARY KEY,
        firstname TEXT NOT NULL,
        lastname TEXT NOT NULL,
        othernames TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        phoneNumber INTEGER NOT NULL,
        username TEXT NOT NULL,
        registered TIMESTAMP NOT NULL,
        isAdmin BOOLEAN NOT NULL,
        password TEXT NOT NULL
      )`;

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

/**
 * Drop Incident Table
 */
const dropIncidentTable = () => {
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

/**
 * Drop User Table
 */
const dropUserTable = () => {
  const queryText = 'DROP TABLE IF EXISTS users returning *';
  pool.query(queryText)
    .then((res) => {
      pool.end();
    })
    .catch((err) => {
      pool.end();
    });
}

// /**
//  * Create All Tables
//  */
// const createAllTable = () => {
//   createUserTable();
//   createIncidentTable();
// }

// /**
//  * Drop All Tables
//  */
// const dropAllTable = () => {
//   dropUserTable();
//   dropIncidentTable();
// }

module.exports = {
  createIncidentTable,
  dropIncidentTable,
  createUserTable,
  dropUserTable,
};

require('make-runnable');