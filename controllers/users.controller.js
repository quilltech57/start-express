const { handlerResponse } = require('../utils/error-handler');

const getUser = async (req, res) => handlerResponse(req, res, 200, {
  status: 'success',
  message: 'These are all users on board!!!',
});
module.exports = { getUser };
