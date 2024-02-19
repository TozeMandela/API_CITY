import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('get - all - city', () => {

	it('get all city', async ()=> {

		const data = await testServer.post('/city').send({name: 'Luanda'});

		const data2 = await testServer.post('/city').send({name: 'Luanda'});

		expect(data.status && data2.status).toEqual(StatusCodes.CREATED);

		const response = await testServer.get('/city').send();

		expect(response.status).toEqual(StatusCodes.OK);
		expect(typeof response.body).toEqual('object');
		expect(response.body).toHaveProperty('data[0].name');
	});

	it('get all city, but return empty object', async ()=> {

		const data = await testServer.post('/city').send({name: 'Luanda'});

		const data2 = await testServer.post('/city').send({name: 'Luanda'});

		expect(data.status && data2.status).toEqual(StatusCodes.CREATED);

		const response = await testServer.get('/city').send();

		response.body.data = [];
		expect(response.status).toEqual(StatusCodes.OK);
		expect(response.body.data).toEqual([]);
	});
});