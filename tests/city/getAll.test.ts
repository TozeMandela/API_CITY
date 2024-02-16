import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('delete - city', () => {

	it('exist one params id of city in your url and he is bigger then 0', async ()=> {
		const response = await testServer.delete('/city/1').send();

		expect(response.status).toEqual(StatusCodes.MOVED_PERMANENTLY);
		expect(response.body).toHaveProperty('city.name');
	});

	it('id for delete have a format invalid or equals zero', async ()=> {
		const response = await testServer.delete('/city/0').send();

		expect(response.status).toEqual(StatusCodes.BAD_REQUEST);
		expect(response.body).toHaveProperty('Errors.params.id');
	});
});