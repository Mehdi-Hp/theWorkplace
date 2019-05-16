const hireAdController = require('../controllers/hireAd');

module.exports = {
	async listAll(request, h) {
		try {
			return hireAdController.listAll();
		} catch ({ message }) {
			return h.badImplementation(`Couldn't get hire ads because of server error`);
		}
	},
	async list(request, h) {
		const { companyID } = request.params;
		try {
			return hireAdController.list(companyID);
		} catch ({ message }) {
			return h.badImplementation(`Couldn't get company's hire ads because of server error`);
		}
	},
	async create(request, h) {
		const { companyID } = request.params;
		const hireAdData = request.payload;
		const jobProviderID = request.auth.credentials._id;
		try {
			return hireAdController.create({ companyID, jobProviderID, hireAdData });
		} catch ({ message }) {
			return h.badImplementation(`Couldn't add hire ad for company because of server error`);
		}
	}
};
