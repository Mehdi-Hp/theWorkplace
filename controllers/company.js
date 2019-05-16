const Boom = require('boom');
const CompanyModel = require('../models/CompanyModel');

module.exports = {
	async list() {
		return CompanyModel.find({});
	},
	async get(companyID) {
		const company = await CompanyModel.findById(companyID);
		return company || Boom.notFound('Company not found');
	},
	async create(companyData) {
		const company = new CompanyModel({
			...companyData
		});
		try {
			return company.save();
		} catch (error) {
			return Boom.badImplementation(error);
		}
	},

	async addEmployee(companyID, employeeID) {
		const company = await this.get(companyID);
		company.employees.push(employeeID);
		return company.save();
	},
	async listEmployees(companyID) {
		const company = await this.get(companyID);
		const companyWithEmployees = await company.populate('employees');
		return companyWithEmployees.employees;
	}
};
