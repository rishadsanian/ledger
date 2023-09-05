//server.js
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const pool = require("./db/config");

const accountRoutes = require("./routes/accountRoutes");
//--------------------------------------------------------------------------//
dotenv.config();
app.use(morgan("dev"));
app.use(express.json());

//-------------------------------------------------------------------------//

const PORT = process.env.PORT || 8080;

//----------------------------------------------------------------------------//

// Test the database connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Connected to database at:", res.rows[0].now);
  }
});

//----------------------------------------------------------------------------//
//Routes
app.use("/api/accounts", accountRoutes);

//----------------------------------------------------------------------------//
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
