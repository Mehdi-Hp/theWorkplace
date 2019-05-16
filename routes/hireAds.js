const hireAdHandler = require('../handlers/hireAd');

module.exports = {
	name: 'Hire ads Routes',
	version: '0.0.0',
	async register(server, options) {
		server.route([
			{
				method: 'GET',
				path: '/hire-ads',
				handler: hireAdHandler.listAll
			}
		]);
	}
};
