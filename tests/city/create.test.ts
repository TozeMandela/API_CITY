import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('city-create', () => {

	it('Errors: when length are incorretct', async ()=> {
		const response = await testServer.post('/city').send({name: 'Lu'});

		expect(response.status).toEqual(StatusCodes.BAD_REQUEST);
		expect(response.body).toHaveProperty('Errors.body.name');
	});

	it('criar registros', async () => {
		const response = await testServer.post('/city').send({name: 'Luanda'});

		expect(response.status).toEqual(StatusCodes.CREATED);
		expect(typeof response.body.info).toEqual('number');
	});


});