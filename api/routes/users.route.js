const { Router } = require('express');

/*
Exports to index,.js api file
 */
const { getUser } = require('../../controllers/users.controller');

const router = Router();

router.route('/users').get(getUser);

module.exports = router;
