import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const route = Router();

route.get('/', (_, res) => {
	res.status(StatusCodes.ACCEPTED).json({info: 'welcome in backend city'});
});

export default route;