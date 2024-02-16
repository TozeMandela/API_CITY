import 'dotenv/config';
import { app } from '../app';

const PORT = 3330;

app.listen(process.env.PORT || PORT, () => {
	console.log('====================================');
	console.log('server running in port ', PORT);
	console.log('====================================');
});