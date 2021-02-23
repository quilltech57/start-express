const jwt = require("jsonwebtoken");
const moment = require("moment");
const ms = require("ms");
const randToken = require("rand-token");

const { auth } = require("../config/env");

// Verify Node env
const dev = process.env.NODE_ENV !== "production";

let refreshTokens = {};

// Set cookie options for refersh token
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: !dev,
  signed: true,
};

// Generate Token for User
const generateToken = (payload) => {
  if (!payload) {
    return null;
  }
  /*
   * *Return a payload of less sensitive data
   */
  payload = {
    fullname: payload.fullname,
    email: payload.email,
    userId: payload.uuid,
  };

  /* Generate XSRF Token */
  const xsrfToken = randToken.generate(24);

  // PrivateKey with combination of access secret ans xsrfToken
  const privateKey = auth.jwt_secret + xsrfToken;

  const token = jwt.sign(payload, privateKey, {
    expiresIn: auth.access_token_life,
  });

  expireAt = moment().add(ms(auth.access_token_life), "ms").valueOf();
  return {
    token,
    expireAt,
    xsrfToken,
  };
};

// Generate Refresh Token
const generateRefreshToken = (userId) => {
  if (!userId) return null;
  return jwt.sign({ userId }, auth.jwt_secret, {
    expiresIn: auth.access_token_life,
  });
};

// Verify Access Token and Refresh Token
const verifyToken = (token, xsrfToken = "", cb) => {
  const privateKey = auth.jwt_secret + xsrfToken;
  jwt.verify(token, privateKey, cb);
};

// Clear Tokens from Cookies
const clearTokens = (req, res) => {
  const { signedCookies = {} } = req;
  const { refreshToken } = signedCookies;
  delete refreshTokens[refreshToken];

  res.clearCookie("XSRF-TOKEN");
  res.clearCookie("refreshToken", COOKIE_OPTIONS);
};

module.exports = {
  generateToken,
  generateRefreshToken,
  verifyToken,
  COOKIE_OPTIONS,
  refreshTokens,
  clearTokens,
};
