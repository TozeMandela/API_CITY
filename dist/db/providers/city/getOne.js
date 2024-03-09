"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _nameOFtables = require('../../nameOFtables');
var _index = require('../../knex/index');



 const getOne = async (id) => {
	try {
		const response = await _index.Knex.call(void 0, _nameOFtables.Etable.city)
			.where('id', id).first();
      
		if(response)
			return response;

		return {}  ;
	} catch (error) {
		return new Error('erro ao buscar a cidades');
	}
}; exports.getOne = getOne;