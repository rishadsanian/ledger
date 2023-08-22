const express = require("express");
const app = express();
const { Pool, Client } = require("pg");
const dotenv = require("dotenv");
const morgan = require("morgan");

//--------------------------------------------------------------------------//
dotenv.config();
app.use(morgan("dev"));

//-------------------------------------------------------------------------//

const PORT = process.env.PORT || 8080; // Use a port of your choice

//----------------------------------------------------------------------------//

// Create a new Pool instance
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

// Test the database connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Connected to database at:", res.rows[0].now);
  }
});

//----------------------------------------------------------------------------//
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
