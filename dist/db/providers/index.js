"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }var _create = require('./city/create'); var create = _interopRequireWildcard(_create);
var _getAll = require('./city/getAll'); var getAll = _interopRequireWildcard(_getAll);
var _UpdatedOne = require('./city/UpdatedOne'); var updated = _interopRequireWildcard(_UpdatedOne);
var _getOne = require('./city/getOne'); var getOne = _interopRequireWildcard(_getOne);
var _DeleteOne = require('./city/DeleteOne'); var del = _interopRequireWildcard(_DeleteOne);

const CityProviders = {
	...create,
	...getAll,
	...getOne,
	...updated,
	...del,
};

exports.CityProviders = CityProviders;