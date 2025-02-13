require('dotenv').config();
const { Pool } = require('pg');

// Connect to PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = pool;
