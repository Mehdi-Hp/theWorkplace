module.exports = {
	name: 'Index Routes',
	version: '0.0.0',
	async register(server, options) {
		await server.register([
			{
				plugin: require('./authentication'),
				routes: {
					prefix: '/auth'
				}
			},
			{
				plugin: require('./jobFinders'),
				routes: {
					prefix: '/api/jobFinders'
				}
			},
			{
				plugin: require('./jobProviders'),
				routes: {
					prefix: '/api/jobProviders'
				}
			},
			{
				plugin: require('./hireAds'),
				routes: {
					prefix: '/api'
				}
			},
			{
				plugin: require('./companies'),
				routes: {
					prefix: '/api/companies'
				}
			}
		]);
	}
};
