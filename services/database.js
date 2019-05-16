const mongoose = require('mongoose');
const debug = require('debug')('app:database');
const chalk = require('chalk');

mongoose.set('debug', true);

const { username, password, host, port, collection } = require('../config/databaseConfig');

const getConnectionStringBasedOnEnv = () => {
	if (process.env.MONGODB_USERNAME) {
		return `mongodb://${username}:${password}@${host}:${port}/${collection}`;
	}
	return `mongodb://${host}:${port}/${collection}`;
};
module.exports = {
	connect() {
		mongoose.connect(getConnectionStringBasedOnEnv(), {
			useNewUrlParser: true
		});
		const mongooseConnection = mongoose.connection;
		this.listenAndLog(mongooseConnection);
		return mongooseConnection;
	},
	listenAndLog(mongooseConnection) {
		mongooseConnection.on('error', (error) => {
			throw error;
		});
		mongooseConnection.once('open', () => {
			debug(chalk.bold.underline.cyan(`Connected to MongoDB, ${mongooseConnection.name} collection`));
		});
		mongooseConnection.on('reconnect', () => {
			debug(chalk.bold.underline.cyan(`Reconnected to MongoDB, ${mongooseConnection.name} collection`));
		});
	}
};
