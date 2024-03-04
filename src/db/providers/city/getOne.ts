import { Etable } from '../../nameOFtables';
import { Knex } from '../../knex/index';
import { ICity } from '../../models/city';


export const getOne = async (id: number): Promise<ICity | Error> => {
	try {
		const response = await Knex(Etable.city)
			.where('id', id).first();
      
		if(response)
			return response;

		return {} as ICity ;
	} catch (error) {
		return new Error('erro ao buscar a cidades');
	}
};