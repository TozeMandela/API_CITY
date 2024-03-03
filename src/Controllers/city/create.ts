import * as yup from 'yup';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Validation } from '../../shared';
import { ICity } from '../../db/models/city';
import { CityProviders } from '../../db/providers';

export interface IBodyCidade extends Omit<ICity, 'id'>{ }

export  const createBodyValidator = Validation.Validation( (getSchema) => ({
	body: getSchema<IBodyCidade>(yup.object().shape({
		name: yup.string().required().min(3).max(160)
	})),

}) );

export const createCity = async (req: Request<{}, {}, IBodyCidade>, res: Response) => {
	const result = await CityProviders.create(req.body);

	if (result instanceof Error) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({errors: {
			default: result.message
		}});
	}


	return res.status(StatusCodes.CREATED).json({info: result});

};