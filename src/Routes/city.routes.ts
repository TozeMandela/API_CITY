import { Router } from 'express';

import { cityControllers } from '../Controllers';

const route = Router();

route.get('/', cityControllers.ValidatorGetAll, cityControllers.getAllCity);
route.get('/:id', cityControllers.ValidatorGetOne, cityControllers.getOneCity);
route.put('/:id', cityControllers.ValidatorUpdated, cityControllers.UpdatedCity);
route.post('/', cityControllers.createBodyValidator, cityControllers.createCity);
route.delete('/:id', cityControllers.Validatordelete, cityControllers.deleteCity);

export default route;