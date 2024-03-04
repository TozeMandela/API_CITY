import * as yup from 'yup';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { Validation } from '../../shared';
import { IBodyCidade } from './create';
import { CityProviders } from '../../db/providers';

interface IparamsProps {
  id?: number;
}


export  const ValidatorUpdated = Validation.Validation( (getSchema) => ({
	params: getSchema<IparamsProps>(yup.object().shape({
		id: yup.number().moreThan(0),
	})),
	body: getSchema<IBodyCidade>(yup.object().shape({
		name: yup.string().required().min(3),
	}))
})
);


export const UpdatedCity = async (req: Request<IparamsProps, {}, IBodyCidade, {}>, res: Response) => {
	const result = await CityProviders.Updated(req.params.id!, req.body);

	if (result instanceof Error) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({errors: {
			default: result.message
		}});
	}

	return res.status(StatusCodes.ACCEPTED).json({data: result});

};