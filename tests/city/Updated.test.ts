import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('updated - city', () => {

	it('get one', async ()=> {

		const data = await testServer.post('/city').send({name: 'Luanda'});

		expect(data.status).toEqual(StatusCodes.CREATED);

		const response = await testServer.get('/city/1').send({name: 'Benguela'});

		expect(response.status).toEqual(StatusCodes.ACCEPTED);
		expect(typeof response.body.data).toEqual('object');

	});

	it('erro in get one city', async ()=> {
		const response = await testServer.delete('/city/0').send();

		expect(response.status).toEqual(StatusCodes.BAD_REQUEST);
		expect(response.body).toHaveProperty('Errors.params.id');
	});
});