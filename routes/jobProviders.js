const jobProviderHandler = require('../handlers/jobProvider');
const jobProviderSchema = require('../schemas/jobProvider');

module.exports = {
	name: 'Job Provider Routes',
	version: '0.0.0',
	async register(server, options) {
		server.route([
			{
				method: 'GET',
				path: '/{userID}',
				handler: jobProviderHandler.get,
				options: {
					validate: {
						params: jobProviderSchema.get
					}
				}
			},
			{
				method: 'POST',
				path: '/',
				handler: jobProviderHandler.create,
				options: {
					auth: false,
					validate: {
						payload: jobProviderSchema.create
					}
				}
			}
		]);
	}
};
