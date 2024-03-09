"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _nameOFtables = require('../../nameOFtables');
var _index = require('../../knex/index');



 const getAll = async () => {
	try {
		const response = await _index.Knex.call(void 0, _nameOFtables.Etable.city).select();

		return response;
	} catch (error) {
		return new Error('erro ao buscar as cidades');
	}
}; exports.getAll = getAll;