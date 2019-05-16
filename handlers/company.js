const companyController = require('../controllers/company');

module.exports = {
	async list(request, h) {
		try {
			return companyController.list();
		} catch ({ message }) {
			return h.badImplementation(`Couldn't list companies because of server error`);
		}
	},
	async get(request, h) {
		const { companyID } = request.params;
		try {
			return companyController.get(companyID);
		} catch ({ message }) {
			return h.badImplementation(`Couldn't get company because of server error`);
		}
	},
	async create(request, h) {
		const companyData = request.payload;
		try {
			return companyController.create(companyData);
		} catch ({ message }) {
			return h.badImplementation(`Couldn't create company because of server error`);
		}
	},

	async addEmployee(request, h) {
		const { companyID } = request.params;
		const { id: employeeID } = request.payload;
		try {
			return companyController.addEmployee(companyID, employeeID);
		} catch ({ message }) {
			return h.badImplementation(`Couldn't add employee to company because of server error`);
		}
	},
	async listEmployees(request, h) {
		const { companyID } = request.params;
		try {
			return companyController.listEmployees(companyID);
		} catch ({ message }) {
			return h.badImplementation(`Couldn't get company's employees because of server error`);
		}
	}
};
