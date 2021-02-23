require("dotenv").config({ veborse: true });
/**
  @description All envs can be added and exported here
 */
module.exports = {
	webport: process.env.PORT,
	env: process.env.NODE_ENV,
	origin: process.env.ORIGIN,
	database: {
		db_uri: process.env.DB_URI,
		username: process.env.DATABASE_USERNAME,
		password: process.env.DATABASE_PASSWORD,
		database: process.env.DATABASE_NAME,
		host: process.env.DATABASE_HOST,
		dialect: process.env.DATABASE_DIALECT,
	},
	auth: {
		jwt_secret: process.env.JWT_SECRET,
		access_token_life: process.env.ACCESS_TOKEN_LIFE,
		cookie_secret: process.env.COOKIE_SECRET,
		sendgridKey: process.env.SENDGRID_API_KEY,
	},
};
