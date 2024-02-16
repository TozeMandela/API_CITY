import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Schema, ValidationError } from 'yup';

type TFields = 'body' | 'params' | 'headers' | 'query';

type IGetInterface = <T>(schema: Schema<T>) => Schema<T>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TAllSchema = Record<TFields, Schema<any>>

type TuseInteface = (getSchema: IGetInterface) => Partial<TAllSchema>

type TValidation = (schema: TuseInteface) => RequestHandler;


export const Validation: TValidation = (getSchema) => async (req, res, next) => {
	const schema = getSchema(schema=>schema);

	const ErrorResult: Record<string, Record<string, string>> = {};

	Object.entries(schema).forEach(([key, schema])=>{

		try {
			schema.validateSync(req[key as TFields ], {abortEarly: false});

		} catch (error) {

			const Errors: Record<string, string> = {};

			const yupError = error as ValidationError;

			yupError.inner.forEach( ({path, message}) => {
				if(path) Errors[path] = message;
			});

			ErrorResult[key as TFields] = Errors;
		}
	});

	if(Object.entries(ErrorResult).length === 0){
		return next();
	}else{
		return res.status(StatusCodes.BAD_REQUEST).json({ Errors: ErrorResult });
	}
};