"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }var _yup = require('yup'); var yup = _interopRequireWildcard(_yup);

var _httpstatuscodes = require('http-status-codes');

var _shared = require('../../shared');
var _providers = require('../../db/providers');





  const Validatordelete = _shared.Validation.Validation( (getSchema) => ({
	params: getSchema(yup.object().shape({
		id: yup.number().moreThan(0),
	}))
})
); exports.Validatordelete = Validatordelete;


 const deleteCity = async (req, res) => {
	const result = await _providers.CityProviders.delet(_nullishCoalesce(req.params.id, () => ( 0)));

	if (result instanceof Error) {
		return res.status(_httpstatuscodes.StatusCodes.INTERNAL_SERVER_ERROR).json({errors: {
			default: result.message
		}});
	}

	return res.status(_httpstatuscodes.StatusCodes.MOVED_PERMANENTLY).json({info: result});

}; exports.deleteCity = deleteCity;