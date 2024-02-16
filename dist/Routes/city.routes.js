"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

var _Controllers = require('../Controllers');

const route = _express.Router.call(void 0, );

route.get('/', _Controllers.cityControllers.ValidatorGetAll, _Controllers.cityControllers.getAllCity);
route.get('/:id', _Controllers.cityControllers.ValidatorGetOne, _Controllers.cityControllers.getOneCity);
route.put('/:id', _Controllers.cityControllers.ValidatorUpdated, _Controllers.cityControllers.UpdatedCity);
route.post('/', _Controllers.cityControllers.createBodyValidator, _Controllers.cityControllers.createCity);
route.delete('/:id', _Controllers.cityControllers.Validatordelete, _Controllers.cityControllers.deleteCity);

exports. default = route;