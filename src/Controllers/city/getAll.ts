import * as yup from 'yup';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { Validation } from '../../shared';
import { CityProviders } from '../../db/providers';

interface IqueryProps {
  id?: number,
  page?: number;
  limit?: number;
  filter?: string;
}

export  const ValidatorGetAll = Validation.Validation( (getSchema) => ({
	query: getSchema<IqueryProps>(yup.object().shape({
		id: yup.number().moreThan(0),
		page: yup.number().moreThan(0),
		limit: yup.number().moreThan(0),
		filter: yup.string(),
	}))
})
);


export const getAllCity = async (req: Request<{}, {}, {}, IqueryProps>, res: Response) => {
	const { filter, id, limit, page } = req.query;

	res.setHeader('access-control-expose-headers', 'x-total-account');
	res.setHeader('x-total-account', 1);


	const data = await CityProviders.getAll(page, limit, filter, id);

	if (data instanceof Error) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({errors: {
			default: data.message
		}});
	}

	return res.status(StatusCodes.OK).json({data});

};