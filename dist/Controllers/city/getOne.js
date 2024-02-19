"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }var _yup = require('yup'); var yup = _interopRequireWildcard(_yup);

var _httpstatuscodes = require('http-status-codes');

var _shared = require('../../shared');





  const ValidatorGetOne = _shared.Validation.Validation( (getSchema) => ({
	params: getSchema(yup.object().shape({
		id: yup.number().moreThan(0),
	}))
})
); exports.ValidatorGetOne = ValidatorGetOne;


 const getOneCity = async (req, res) => {

	const data = [
		{
			id: 1,
			name: 'Luanda'
		}
	];

	return res.status(_httpstatuscodes.StatusCodes.ACCEPTED).json({data});

}; exports.getOneCity = getOneCity;