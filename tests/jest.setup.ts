import supertest from 'supertest';

import { app } from '../src/app';
import { Knex } from '../src/db/knex';

beforeAll(async ()=>{
	await Knex.migrate.latest();
});


afterAll(async ()=>{
	await Knex.destroy();
});


export const testServer = supertest(app);