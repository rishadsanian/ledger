const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const pool = require("./db/config");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
require("./passportConfig"); // Import the passport configuration

const accountRoutes = require("./routes/accountRoutes");
const entryRoutes = require("./routes/entriesRoutes");
const authRoutes = require("./routes/userRoutes"); // Add authentication routes

//--------------------------------------------------------------------------//
dotenv.config();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Session management
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

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
// Routes
app.use("/api/accounts", accountRoutes);
app.use("/api/entries", entryRoutes);
app.use("/auth", authRoutes);

//----------------------------------------------------------------------------//
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
