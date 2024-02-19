import * as yup from 'yup';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { Validation } from '../../shared';

interface IparamsProps {
  id?: number;
}

export  const ValidatorGetOne = Validation.Validation( (getSchema) => ({
	params: getSchema<IparamsProps>(yup.object().shape({
		id: yup.number().moreThan(0),
	}))
})
);


export const getOneCity = async (req: Request<IparamsProps, {}, {}, {}>, res: Response) => {

	const data = [
		{
			id: 1,
			name: 'Luanda'
		}
	];

	return res.status(StatusCodes.ACCEPTED).json({data});

};