const companyHandler = require('../handlers/company');
const hireAdHandler = require('../handlers/hireAd');
const companySchema = require('../schemas/company');
const hireAdSchema = require('../schemas/hireAd');

module.exports = {
	name: 'Company Routes',
	version: '0.0.0',
	async register(server, options) {
		server.route([
			{
				method: 'GET',
				path: '/',
				handler: companyHandler.list
			},
			{
				method: 'GET',
				path: '/{companyID}',
				handler: companyHandler.get
			},
			{
				method: 'POST',
				path: '/',
				handler: companyHandler.create,
				options: {
					validate: {
						payload: companySchema.create
					}
				}
			},

			{
				method: 'GET',
				path: '/{companyID}/employees',
				handler: companyHandler.listEmployees
			},
			{
				method: 'POST',
				path: '/{companyID}/employees',
				handler: companyHandler.addEmployee,
				options: {
					validate: {
						payload: companySchema.addEmployee
					}
				}
			},

			{
				method: 'GET',
				path: '/{companyID}/hire-ads',
				handler: hireAdHandler.list
			},
			{
				method: 'POST',
				path: '/{companyID}/hire-ads',
				handler: hireAdHandler.create,
				options: {
					validate: {
						payload: hireAdSchema.create
					}
				}
			}
		]);
	}
};
