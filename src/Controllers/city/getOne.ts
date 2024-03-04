import * as yup from 'yup';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { Validation } from '../../shared';
import { ICity } from '../../db/models/city';
import { CityProviders } from '../../db/providers';

interface IparamsProps extends Partial<Omit<ICity, 'name'>> {}

export  const ValidatorGetOne = Validation.Validation( (getSchema) => ({
	params: getSchema<IparamsProps>(yup.object().shape({
		id: yup.number().moreThan(0),
	}))
})
);


export const getOneCity = async (req: Request<IparamsProps, {}, {}, {}>, res: Response) => {

	const result = await CityProviders.getOne(req.params.id ?? 0);
  
	if (result instanceof Error) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({errors: {
			default: result.message
		}});
	}

	return res.status(StatusCodes.ACCEPTED).json({data: result});

};