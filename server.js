// /<reference path=".d.ts"/>
require('dotenv').config();
const Hapi = require('hapi');
const path = require('path');
const chalk = require('chalk');
const debug = require('debug')('app:server');

const secretKey = require('./config/secretKey');
const { port, host } = require('./config/serverConfig');

const databaseService = require('./services/database');
const tokenService = require('./services/token');

databaseService.connect();

const server = new Hapi.Server({
	port,
	host,
	debug: {
		request: ['error']
	},
	routes: {
		files: {
			relativeTo: path.join(__dirname, 'public', 'production')
		}
	}
});

const start = async () => {
	try {
		await server.register([
			{
				plugin: require('hapi-auth-jwt2')
			},
			{
				plugin: require('hapi-pino'),
				options: {
					prettyPrint: true,
					logEvents: ['onPostStart']
				}
			},
			{
				plugin: require('inert')
			},
			{
				plugin: require('hapi-dev-errors'),
				options: {
					showErrors: true
				}
			},
			{
				plugin: require('hapi-boom-decorators')
			},
			{
				plugin: require('./routes/index.js')
			}
		]);

		server.auth.strategy('jwt', 'jwt', {
			key: secretKey,
			verifyOptions: {
				ignoreExpiration: true,
				algorithms: ['HS256']
			},
			validate: tokenService.validate
		});
		server.auth.default('jwt');

		await server.start();
		debug(chalk.bold.underline.cyan(`Server running at: ${server.info.uri}`));
	} catch (error) {
		debug(chalk.bold.underline.cyan(`Error starting server: ${error}`));
		process.exit(1);
	}
};

start();
