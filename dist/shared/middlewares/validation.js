"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _httpstatuscodes = require('http-status-codes');














 const Validation = (getSchema) => async (req, res, next) => {
	const schema = getSchema(schema=>schema);

	const ErrorResult = {};

	Object.entries(schema).forEach(([key, schema])=>{

		try {
			schema.validateSync(req[key  ], {abortEarly: false});

		} catch (error) {

			const Errors = {};

			const yupError = error ;

			yupError.inner.forEach( ({path, message}) => {
				if(path) Errors[path] = message;
			});

			ErrorResult[key ] = Errors;
		}
	});

	if(Object.entries(ErrorResult).length === 0){
		return next();
	}else{
		return res.status(_httpstatuscodes.StatusCodes.BAD_REQUEST).json({ Errors: ErrorResult });
	}
}; exports.Validation = Validation;