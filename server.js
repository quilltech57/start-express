const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { origin } = require('./config');

require('./config/mongodbConfig')();

const api = require('./api');

const app = express();
app.use(morgan('combined'));
app.use(cookieParser());
app.use(helmet());
app.use(
  cors({
    origin: origin, //url of production app
    credentials:
      false, // make true on production
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', api);

module.exports = app;
