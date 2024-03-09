"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }var _yup = require('yup'); var yup = _interopRequireWildcard(_yup);

var _httpstatuscodes = require('http-status-codes');

var _shared = require('../../shared');

var _providers = require('../../db/providers');






  const ValidatorUpdated = _shared.Validation.Validation( (getSchema) => ({
	params: getSchema(yup.object().shape({
		id: yup.number().moreThan(0),
	})),
	body: getSchema(yup.object().shape({
		name: yup.string().required().min(3),
	}))
})
); exports.ValidatorUpdated = ValidatorUpdated;


 const UpdatedCity = async (req, res) => {
	const result = await _providers.CityProviders.Updated(req.params.id, req.body);

	if (result instanceof Error) {
		return res.status(_httpstatuscodes.StatusCodes.INTERNAL_SERVER_ERROR).json({errors: {
			default: result.message
		}});
	}

	return res.status(_httpstatuscodes.StatusCodes.ACCEPTED).json({data: result});

}; exports.UpdatedCity = UpdatedCity;