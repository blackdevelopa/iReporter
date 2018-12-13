const config = require('./config');
const { Pool } = require('pg');
const dotenv = require('dotenv');


dotenv.config();

const pool = (process.env.NODE_ENV === 'test')?(new Pool(config.test)):((new Pool(config.development)));


pool.on('connect', () => {
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
      createdBy INTEGER NOT NULL,
      type VARCHAR(255) NOT NULL,
      location VARCHAR(255) NOT NULL,
      status VARCHAR(255) NOT NULL,
      images VARCHAR(255) NOT NULL,
      videos VARCHAR(255) NULL,
      comment VARCHAR(255) NOT NULL
    )`;

    pool.query(queryText)
    .then((res) => {
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
      firstname VARCHAR(255) NULL,
      lastname VARCHAR(255) NULL,
      othernames VARCHAR(255) NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      phoneNumber VARCHAR(255) NULL,
      username VARCHAR(255) NULL,
      registered TIMESTAMP NOT NULL,
      isAdmin BOOLEAN NOT NULL,
      password VARCHAR(255) NOT NULL
    )`;

  pool.query(queryText)
    .then((res) => {
      pool.end();
    })
    .catch((err) => {
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

module.exports = {
  createIncidentTable,
  dropIncidentTable,
  createUserTable,
  dropUserTable,
};

require('make-runnable');