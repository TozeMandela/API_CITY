"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }var _yup = require('yup'); var yup = _interopRequireWildcard(_yup);

var _httpstatuscodes = require('http-status-codes');

var _shared = require('../../shared');







  const ValidatorGetAll = _shared.Validation.Validation( (getSchema) => ({
	query: getSchema(yup.object().shape({
		page: yup.number().moreThan(0),
		limit: yup.number().moreThan(0),
		filter: yup.string(),
	}))
})
); exports.ValidatorGetAll = ValidatorGetAll;


 const getAllCity = async (req, res) => {


	return res.status(_httpstatuscodes.StatusCodes.NOT_IMPLEMENTED).json({info: 'not implemented'});

}; exports.getAllCity = getAllCity;