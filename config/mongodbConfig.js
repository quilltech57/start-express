const mongoose = require('mongoose');
const logger = require('../utils/winston-logger');
const { env, database } = require('./index');

async function connectDatabase() {
  let connectionStr;
  try {
    const options = {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    };
    switch (env) {
      case 'development':
        connectionStr = mongoose.connect(database.db_uri, options);
        logger.log('debug', `Database connected on ${database.db_uri}.`);
        break;
      case 'test':
        connectionStr = mongoose.connect(database.db_uri_test, options);
        logger.log('debug', `Database connected on ${database.db_uri_test}.`);
        break;
      default:
        connectionStr = mongoose.connect(database.db_uri, options);
        logger.log('debug', `Database connected on ${database.db_uri}.`);
        break;
    }
  } catch (err) {
    logger.log('error', `${err.message}`);
    process.exit(1);
  }
}
module.exports = connectDatabase;
