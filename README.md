# Start Express Api

[![Build Status](https://travis-ci.com/quilltech57/start-express.svg?branch=main)](https://coveralls.io/github/quilltech57/start-express?branch=main)
[![Coverage Status](https://coveralls.io/repos/github/quilltech57/start-express/badge.svg?branch=main)](https://coveralls.io/github/quilltech57/start-express?branch=main)

## Installed Dependencies

- [Morgan](https://www.npmjs.com/package/morgan)
  - HTTP request logger middleware for node.js
- [Cookie-parser](https://www.npmjs.com/package/cookie-parser)
  - Parse Cookie header and populate req.cookies with an object keyed by the cookie names it may be used by other middleware.
- [Nodemon](https://www.npmjs.com/package/nodemon)
  - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- [Helmet](https://www.npmjs.com/package/helmet)
  - Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
  - JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.
- [Dotenv](https://www.npmjs.com/package/dotenv)
  - Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
- [Winston](https://www.npmjs.com/package/winston)
  - Winston is designed to be a simple and universal logging library with support for multiple transports. A transport is essentially a storage device for your logs.

# Features:

- Test Coverage with [Chai](https://https://www.chaijs.com/) and [Mocha](https://www.mochajs.org/)
- Auth middleware
- Auth-token middleware including XSRF token
- Travis integration
- Well organised error and response handler

## Usage

- Clone the repository - `git clone https://github.com/quilltech57/start-express.git`
- Change the git remote url to point to your repository - `git remote set-url origin https://github.com/your-username/your-repo.git`
- Create a file `.env` and copy the variables in `.env.example` into it. Use bash command - `cp .env.example .env`

- Install dependencies - `yarn install`
- Start the app mode - `yarn run start`
- Start the app in dev mode - `yarn run dev`
- You can explore and customize the generated boilerplate to suit your need.
