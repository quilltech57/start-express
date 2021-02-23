const faker = require("faker");
const logger = require("../utils/winston-logger");

/*
 *  @description Modify to you taste.
 */

const seedUsers = async () => {
	try {
		let i;
		const qty = 5;
		const users = [];
		for (i = 0; i < qty; i++) {
			users.push({
				username: faker.internet.userName(),
				email: faker.internet.email(),
				password: faker.internet.password(),
				profilePhoto: faker.internet.avatar(),
			});
		}

		users.forEach(async (user) => {
			console.log(user);
		});
		logger.info("Data Seeded");
	} catch (error) {
		logger.log("info", `${error}`);
	}
};

seedUsers();
