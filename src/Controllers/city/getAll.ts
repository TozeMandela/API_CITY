import * as yup from 'yup';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { Validation } from '../../shared';

interface IqueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export  const ValidatorGetAll = Validation.Validation( (getSchema) => ({
	query: getSchema<IqueryProps>(yup.object().shape({
		page: yup.number().moreThan(0),
		limit: yup.number().moreThan(0),
		filter: yup.string(),
	}))
})
);


export const getAllCity = async (req: Request<{}, {}, {}, IqueryProps>, res: Response) => {

	res.setHeader('access-control-expose-headers', 'x-total-account');
	res.setHeader('x-total-account', 1);

	const data = [
		{
			id: 1,
			name: 'Luanda'
		},
		{
			id: 2,
			name: 'Benguela'
		},
	];

	return res.status(StatusCodes.OK).json({data});

};