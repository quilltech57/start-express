const logger = require('../utils/winston-logger');
const User = require('../models/users.model');
const users = require('./data/_user');
require('../config/mongodbConfig')();

const importData = async () => {
  try {
    await User.deleteMany();
    await User.insertMany(users);
    logger.info('Data Seeded');
    process.exit();
  } catch (error) {
    logger.log('info', `${error}`);
    process.exit(1);
  }
};
if (process.argv[2] === 'i') {
  importData();
}
