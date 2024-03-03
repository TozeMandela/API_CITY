import { Etable } from '../../nameOFtables';
import { Knex } from '../../knex/index';
import { ICity } from '../../models/city';


export const getAll = async (): Promise<ICity[] | Error> => {
	try {
		const response = await Knex(Etable.city).select();

		return response;
	} catch (error) {
		return new Error('erro ao buscar as cidades');
	}
};