"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _path = require('path');

 const development = {
	client: 'sqlite3',
	useNullAsDefault: true,
	connection: {
		filename: _path.resolve.call(void 0, __dirname, '..', '..', '..', 'database.sqlite'),
	},
	migrations: {
		directory: _path.resolve.call(void 0, __dirname, '..','migrations'),
	},
	seeds: {
		directory: _path.resolve.call(void 0, __dirname, '..', 'seeders'),
	},
	pool: {
		afterCreate: (connection, done) => {
			connection.run('PRAGMA foreign_keys = ON');
			done();
		}
	}
}; exports.development = development;

 const tests  = {
	...exports.development,
	connection: ':memory'
}; exports.tests = tests;

 const production  = {
	...exports.development,
}; exports.production = production;