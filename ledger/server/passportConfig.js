/* eslint-disable camelcase */
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const pool = require("./db/config");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const res = await pool.query("SELECT * FROM users WHERE email = $1", [profile.emails[0].value]);
        let user = res.rows[0];

        if (!user) {
          const newUser = {
            username: profile.displayName,
            email: profile.emails[0].value,
            role: "user",
            password: null,
            fk_company_id: null,
          };
          const result = await pool.query(
            "INSERT INTO users (username, email, role, fk_company_id) VALUES ($1, $2, $3, $4) RETURNING *",
            [newUser.username, newUser.email, newUser.role, newUser.fk_company_id]
          );
          user = result.rows[0];
        }

        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const res = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    const user = res.rows[0];
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});
