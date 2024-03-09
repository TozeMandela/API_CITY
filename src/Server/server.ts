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

Knex.migrate.latest().then(()=> {
	app.emit('on');
}).catch(e => {
	console.log('Erro ao se connectar com a base de dados', e);
});