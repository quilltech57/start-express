const { Router } = require('express');
const { handlerResponse } = require('../utils/error-handler');

const router = Router();
/*
 *
 *Handles all routes within this file and then exporst to server.js.
 * This helps to keep your file neat and consistent.
 */
const userRoute = require('./routes/users.route');

router.get('/', (req, res) => handlerResponse(req, res, 200, {
  status: 'success',
  message: 'Simple Express Api ',
}),);

router.use(userRoute);

module.exports = router;
