const simpleOAuth2GooglePlus = require('simple-oauth2-google-plus');
 
const google = simpleOAuth2GooglePlus.create({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/.netlify/functions/auth-callback'
});
 
// Ask the user to authorize.
router.get('/auth/google', google.authorize);
 
// Exchange the token for the access token.
router.get('/auth/google/callback', google.accessToken, (req, res) => {
  return res.status(200).json(req.token);
});