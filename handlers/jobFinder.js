const jobFinder = require('../controllers/jobFinder');

module.exports = {
	async get(request, h) {
		const { userID } = request.params;
		try {
			return jobFinder.get(userID);
		} catch ({ message }) {
			return h.badImplementation(`Couldn't fetch user because of database error`);
		}
	},
	async create(request, h) {
		const userData = request.payload;
		try {
			return jobFinder.create(userData);
		} catch ({ message }) {
			return h.badImplementation(`Couldn't create user because of database error`);
		}
	}
};
