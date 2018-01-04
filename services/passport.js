const passport = require('passport');
const qqStrategy = require('passport-qq').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  // id is generated from mongb
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // id is generated from mongb
  User.findById(id).then(user => done(null, user));
});

passport.use(
  new qqStrategy(
    {
      clientID: keys.qqClientID,
      clientSecret: keys.qqClientSecret,
      callbackURL: '/auth/qq/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ qqId: profile.id });

      if (existingUser) {
        // user exists, we do not want to create new user
        return done(null, existingUser);
      }
      // user does not exist, we want to create new user
      const user = await new User({ qqId: profile.id }).save();
      done(null, user);
    }
  )
);
