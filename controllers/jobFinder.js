const userService = require('../services/userService');

module.exports = {
	async create(userData) {
		return userService.create(userData, 'JobFinder');
	},
	async get(userID) {
		return userService.getByID(userID);
	}
};
