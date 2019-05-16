const jobProvider = require('../controllers/jobProvider');

module.exports = {
	async get(request, h) {
		const { userID } = request.params;
		try {
			return jobProvider.get(userID);
		} catch ({ message }) {
			return h.badImplementation(`Couldn't fetch user because of database error`);
		}
	},
	async create(request, h) {
		const userData = request.payload;
		try {
			return jobProvider.create(userData);
		} catch ({ message }) {
			return h.badImplementation(`Couldn't create user because of database error`);
		}
	}
};
