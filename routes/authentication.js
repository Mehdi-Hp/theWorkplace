const authenticationHandler = require('../handlers/authentication');

module.exports = {
	name: 'Authentication Routes',
	version: '0.0.0',
	async register(server, options) {
		server.route([
			{
				method: 'POST',
				path: '/login',
				handler: authenticationHandler.login,
				options: { auth: false }
			}
		]);
	}
};
