"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _index = require('../../knex/index');

var _nameOFtables = require('../../nameOFtables');


 const create = async (city) =>{
	try {
		const [response] =	await _index.Knex.call(void 0, _nameOFtables.Etable.city).insert(city).returning('id');

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
}; exports.create = create;