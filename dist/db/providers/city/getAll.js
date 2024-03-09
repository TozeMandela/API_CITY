"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _nameOFtables = require('../../nameOFtables');
var _index = require('../../knex/index');

var _knex = require('knex'); var _knex2 = _interopRequireDefault(_knex);


 const getAll = async (page = 1, limit = 10, filter = '', id = 0) => {

	try {
		const response = await _index.Knex.call(void 0, _nameOFtables.Etable.city)
			.select('*')
			.orWhere('name', 'like', `%${filter}%`)
			.offset((page - 1) * limit)
			.limit(limit);


		console.log({response});

		if(id > 0 && response.every(item => item.id !== id)){
			console.log('data', page, limit, filter, id);
			const getDataRequired = await _knex2.default.call(void 0, _nameOFtables.Etable.city).select('*').where('id', id).first();

			const dataResult = [...response, getDataRequired];

			return dataResult;
		}

		return response;
	} catch (error) {
		console.log('getAllError\n\n\n', error);

		return new Error('erro ao buscar as cidades');
	}
}; exports.getAll = getAll;