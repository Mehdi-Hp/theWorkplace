const userService = require('../services/userService');

module.exports = {
	async getAll(request, h) {
		try {
			return await userService.getAll();
		} catch ({ message }) {
			return h.badImplementation(`Couldn't fetch user because of database error`);
		}
	},
	async create(request, h) {
		try {
			return await userService.create();
		} catch ({ message }) {
			return h.badImplementation(`Couldn't create user because of database error`);
		}
	}
};
