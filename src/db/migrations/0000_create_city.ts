import { Knex } from 'knex';
import { Etable as nameTable } from '../nameOFtables';

export async function up(knex: Knex) {
	await knex.schema.createTable(nameTable.city, table => {
		table.bigIncrements('id').primary().index();
		table.string('name', 150).index().notNullable();

		table.comment('table used for storing cities in the system');
	});
	console.log(`Table ${nameTable.city} created successfully`);
}

export async function down(knex: Knex) {
	await knex.schema.dropTable(nameTable.city);
  
	console.log(`Table ${nameTable.city} dropped successfully`);
}
