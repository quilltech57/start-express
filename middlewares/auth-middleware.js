/* eslint-disable import/no-unresolved */
const { refreshTokens, verifyToken } = require('./auth-token');
const { handlerResponse } = require('../util/error-handler');

const auth = function (req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.headers.authorization;
  if (!token) return handlerResponse(req, res, 401);

  token = token.replace('Bearer ', '');

  // get xsrf token from the header
  const xsrfToken = req.headers['x-xsrf-token'];
  if (!xsrfToken) {
    return handlerResponse(req, res, 403);
  }

  // verify xsrf token
  const { signedCookies = {} } = req;
  const { refreshToken } = signedCookies;
  if (
    !refreshToken
    || !(refreshToken in refreshTokens)
    || refreshTokens[refreshToken] !== xsrfToken
  ) {
    return handlerResponse(req, res, 401);
  }

  // verify token with secret key and xsrf token
  verifyToken(token, xsrfToken, (err, payload) => {
    if (err) return handlerResponse(req, res, 401);

    req.user = payload; //set the user to req so other routes can use it
    next();
  });
};
module.exports = auth;
