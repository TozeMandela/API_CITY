"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _nameOFtables = require('../nameOFtables');

 async function up(knex) {
	await knex.schema.createTable(_nameOFtables.Etable.city, table => {
		table.bigIncrements('id').primary().index();
		table.string('name', 150).index().notNullable();

		table.comment('table used for storing cities in the system');
	});
	console.log(`Table ${_nameOFtables.Etable.city} created successfully`);
} exports.up = up;

 async function down(knex) {
	await knex.schema.dropTable(_nameOFtables.Etable.city);
  
	console.log(`Table ${_nameOFtables.Etable.city} dropped successfully`);
} exports.down = down;
