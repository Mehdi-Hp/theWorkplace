const authentication = require('../controllers/authentication');

module.exports = {
	async login(request, h) {
		const { email, password } = request.payload;
		try {
			return authentication.login({
				email,
				password
			});
		} catch (error) {
			return h.badImplementation(`Couldn't login because of database error`);
		}
	}
};
