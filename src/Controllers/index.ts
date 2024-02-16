import * as create from './city/create';
import * as getAll from './city/getAll';
import * as updated from './city/UpdatedOne';
import * as getOne from './city/getOne';
import * as del from './city/DeleteOne';

const cityControllers = {
	...create,
	...getAll,
	...getOne,
	...updated,
	...del,
};

export {cityControllers};