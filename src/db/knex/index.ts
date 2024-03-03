import knex from 'knex';
import { development, production, tests } from './Environment';

const getEnvironment= ()=> {
	switch (process.env.NODE_ENV) {
		case 'production': return production;
		case 'test': return tests;

		default: return development;
	}
};

export const Knex = knex(getEnvironment() );