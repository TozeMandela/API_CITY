import { Etable } from '../../nameOFtables';
import { Knex } from '../../knex/index';
import { ICity } from '../../models/city';


export const Updated = async (id: number, body: Omit<ICity, 'id'>): Promise<number | Error> => {
	try {
		const [response] = await Knex(Etable.city)
			.where('id', id).update(body).returning('id');


		if (typeof response === 'object') {
			return response.id;
		} else if(typeof response === 'number'){
			return response;
		}

		return new Error('Erro ao actualizar city - ' + body);
	} catch (error) {
		return new Error('erro ao actualizar a cidades');
	}
};