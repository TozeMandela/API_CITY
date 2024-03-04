import { Etable } from '../../nameOFtables';
import { Knex } from '../../knex/index';


export const delet = async (id: number): Promise<number | Error> => {
	try {
		const [response] = await Knex(Etable.city)
			.where('id', id)
			.delete().returning('id');


		if (typeof response === 'object') {
			return response.id;
		} else if(typeof response === 'number'){
			return response;
		}

		return new Error('Erro ao cadastrar city');

	} catch (error) {
		return new Error('erro ao buscar as cidades');
	}
};