import { Knex } from 'knex';
import { resolve } from 'path';

export const development: Knex.Config = {
	client: 'sqlite3',
	useNullAsDefault: true,
	connection: {
		filename: resolve(__dirname, '..', '..', '..', 'database.sqlite'),
	},
	migrations: {
		directory: resolve(__dirname, '..','migrations'),
	},
	seeds: {
		directory: resolve(__dirname, '..', 'seeders'),
	},
	pool: {
		afterCreate: (connection: any, done: Function) => {
			connection.run('PRAGMA foreign_keys = ON');
			done();
		}
	}
};

export const tests: Knex.Config  = {
	...development,
	connection: ':memory'
};

export const production: Knex.Config  = {
	...development,
};