"use strict";require('dotenv/config');
var _app = require('../app');
var _knex = require('../db/knex');

const PORT = 3330;


_app.app.on('on', () => {

	_app.app.listen(process.env.PORT || PORT, () => {
		console.log('====================================');
		console.log('server running in port ', PORT);
		console.log('====================================');
	});

});

if(process.env.IN_DEVELOPMENT === 'true'){
	_knex.Knex.migrate.latest().then(()=> {
		console.log('database on');

		_app.app.emit('on');
	}).catch(e => {
		console.log('Erro ao se connectar com a base de dados', e);
	});
} else {
	_app.app.listen(process.env.PORT || PORT, () => {
		console.log('====================================');
		console.log('server running in port ', PORT);
		console.log('====================================');
	});
}


