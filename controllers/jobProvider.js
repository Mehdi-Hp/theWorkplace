const userService = require('../services/userService');

module.exports = {
	async create(userData) {
		return userService.create(userData, 'JobProvider');
	},
	async get(userID) {
		return userService.getByID(userID);
	}
};
