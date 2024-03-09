"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _nameOFtables = require('../../nameOFtables');
var _index = require('../../knex/index');



 const Updated = async (id, body) => {
	try {
		const [response] = await _index.Knex.call(void 0, _nameOFtables.Etable.city)
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
}; exports.Updated = Updated;