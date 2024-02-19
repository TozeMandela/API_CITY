"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }var _yup = require('yup'); var yup = _interopRequireWildcard(_yup);

var _httpstatuscodes = require('http-status-codes');
var _shared = require('../../shared');






  const createBodyValidator = _shared.Validation.Validation( (getSchema) => ({
	body: getSchema(yup.object().shape({
		name: yup.string().required().min(3)
	})),

}) ); exports.createBodyValidator = createBodyValidator;

 const createCity = async (req, res) => {


	return res.status(_httpstatuscodes.StatusCodes.CREATED).json({info: 1});

}; exports.createCity = createCity;