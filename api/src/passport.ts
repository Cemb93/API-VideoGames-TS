const GoogleStrategy = require('passport-google-oauth2').Strategy;
import passport from "passport";

passport.serializeUser((user: any, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
  passReqToCallback: true,
},
  async function (
    // { req, accessToken, refreshToken, profile, done }:
    // ParamsAuth
    _req: any, _accessToken: any, _refreshToken: any, profile: any, done: any
  ) {
    done(null, profile)
  }
));