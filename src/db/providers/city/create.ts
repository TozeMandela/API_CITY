

import { Knex } from '../../knex/index';
import { ICity } from '../../models/city';
import { Etable } from '../../nameOFtables';


export const create = async (city: Omit<ICity, 'id'>): Promise<number | Error>=>{
	try {
		const [response] =	await Knex(Etable.city).insert(city).returning('id');

		if (typeof response === 'object') {
			return response.id;
		} else if(typeof response === 'number'){
			return response;
		}
		return new Error('Erro ao cadastrar city');
	} catch (error) {
		console.log('====================================');
		console.log(error);
		console.log('====================================');
		return new Error('Erro ao cadastrar city');
	}
};