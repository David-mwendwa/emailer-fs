const passport = require('passport');

// Whenever a user gets into this route, we kick them back to the OAuth flow
module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
