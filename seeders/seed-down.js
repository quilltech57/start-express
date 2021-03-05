const logger = require('../utils/winston-logger');
const User = require('../models/users.model');

require('../config/mongodbConfig')();

const destoryData = async () => {
  try {
    await User.deleteMany();
    logger.log('info', 'Database Purged!');
    process.exit();
  } catch (error) {
    logger.log('info', `${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') destoryData();
