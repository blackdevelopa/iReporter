const { Pool } = require('pg');
const dotnev = require('dotenv');

dotnev.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
});

const createTables = () => {
  const queryText = 
    `CREATE TABLE IF NOT EXISTS
    incidents(
      id SERIAL PRIMARY KEY NULL,
      createdOn TIMESTAMP NULL,
      createdBy INTEGER NULL,
      type TEXT NULL,
      location TEXT NOT NULL,
      status TEXT NULL,
      images TEXT NULL,
      videos TEXT NULL,
      comment TEXT NOT NULL
    )`;

    pool.query(queryText)
    .then((res) => {
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
  process.exit(0);
});

module.exports = {
  createTables,
  dropTables
};

require('make-runnable');