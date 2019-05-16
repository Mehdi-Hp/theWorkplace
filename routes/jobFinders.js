const jobFinderHandler = require('../handlers/jobFinder');
const jobFinderSchema = require('../schemas/jobProvider');

module.exports = {
	name: 'Job Finder Routes',
	version: '0.0.0',
	async register(server, options) {
		server.route([
			{
				method: 'GET',
				path: '/{userID}',
				handler: jobFinderHandler.get,
				options: {
					validate: {
						params: jobFinderSchema.get
					}
				}
			},
			{
				method: 'POST',
				path: '/',
				handler: jobFinderHandler.create,
				options: {
					auth: false,
					validate: {
						payload: jobFinderSchema.create
					}
				}
			}
		]);
	}
};
