import express, { Express } from 'express';

import './shared/index'

import Index from './Routes/index.routes';
import city from './Routes/city.routes';

class App {
	readonly app: Express;

	constructor() {
		this.app = express();
		this.middleware();
		this.routes();
	}

	middleware () {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
	}

	routes() {
		this.app.use(Index);
		this.app.use('/city', city);

	}
}
const { app } = new App();

export { app };