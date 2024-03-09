import { Etable } from '../../nameOFtables';
import { Knex } from '../../knex/index';
import { ICity } from '../../models/city';
import knex from 'knex';


export const getAll = async (page = 1, limit = 10, filter = '', id = 0): Promise<ICity[] | Error> => {

	try {
		const response = await Knex(Etable.city)
			.select('*')
			.orWhere('name', 'like', `%${filter}%`)
			.offset((page - 1) * limit)
			.limit(limit);


		console.log({response});

		if(id > 0 && response.every(item => item.id !== id)){
			console.log('data', page, limit, filter, id);
			const getDataRequired = await knex(Etable.city).select('*').where('id', id).first();

			const dataResult = [...response, getDataRequired];

			return dataResult;
		}

		return response;
	} catch (error) {
		console.log('getAllError\n\n\n', error);

		return new Error('erro ao buscar as cidades');
	}
};