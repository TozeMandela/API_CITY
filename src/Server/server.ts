import 'dotenv/config';
import { app } from '../app';
import { Knex } from '../db/knex';

const PORT = 3330;


app.on('on', () => {

	app.listen(process.env.PORT || PORT, () => {
		console.log('====================================');
		console.log('server running in port ', PORT);
		console.log('====================================');
	});

});

if(process.env.IN_DEVELOPMENT === 'true'){
	Knex.migrate.latest().then(()=> {
		console.log('database on');

		app.emit('on');
	}).catch(e => {
		console.log('Erro ao se connectar com a base de dados', e);
	});
} else {
	app.listen(process.env.PORT || PORT, () => {
		console.log('====================================');
		console.log('server running in port ', PORT);
		console.log('====================================');
	});
}


