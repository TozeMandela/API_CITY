import * as yup from 'yup';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { Validation } from '../../shared';
import { CityProviders } from '../../db/providers';

interface IparamsProps {
  id?: number;
}

export  const Validatordelete = Validation.Validation( (getSchema) => ({
	params: getSchema<IparamsProps>(yup.object().shape({
		id: yup.number().moreThan(0),
	}))
})
);


export const deleteCity = async (req: Request<IparamsProps, {}, {}, {}>, res: Response) => {
	const result = await CityProviders.delet(req.params.id ?? 0);

	if (result instanceof Error) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({errors: {
			default: result.message
		}});
	}

	return res.status(StatusCodes.MOVED_PERMANENTLY).json({info: result});

};