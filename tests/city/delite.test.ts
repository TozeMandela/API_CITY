import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('delete - city', () => {

	it('exist one params id of city in your url and he is bigger then 0', async ()=> {

		const data = await testServer.post('/city').send({name: 'Luanda'});

		expect(data.status).toEqual(StatusCodes.CREATED);

		const response = await testServer.delete('/city/1').send();

		expect(response.status).toEqual(StatusCodes.MOVED_PERMANENTLY);
		expect(typeof response.body.info).toEqual('string');
	});

	it('id for delete have a format invalid or equals zero', async ()=> {
		const response = await testServer.delete('/city/0').send();

		expect(response.status).toEqual(StatusCodes.BAD_REQUEST);
		expect(response.body).toHaveProperty('Errors.params.id');
	});
});