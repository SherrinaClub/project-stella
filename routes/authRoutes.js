const passport = require('passport');

module.exports = app => {
  app.get('/greeting', (req, res) => {
    res.send({ hi: 'there' });
  });

  app.get(
    '/auth/qq',
    passport.authenticate('qq', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/qq/callback', passport.authenticate('qq'), (req, res) => {
    res.redirect('/greeting');
  });
};
