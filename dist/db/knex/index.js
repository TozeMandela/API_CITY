"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _knex = require('knex'); var _knex2 = _interopRequireDefault(_knex);
var _Environment = require('./Environment');

const getEnvironment= ()=> {
	switch (process.env.NODE_ENV) {
		case 'production': return _Environment.production;
		case 'test': return _Environment.tests;

		default: return _Environment.development;
	}
};

 const Knex = _knex2.default.call(void 0, getEnvironment() ); exports.Knex = Knex;