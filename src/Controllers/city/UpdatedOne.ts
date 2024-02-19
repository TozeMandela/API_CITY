import * as yup from 'yup';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { Validation } from '../../shared';
import { ICidade } from './create';

interface IparamsProps {
  id?: number;
}


export  const ValidatorUpdated = Validation.Validation( (getSchema) => ({
	params: getSchema<IparamsProps>(yup.object().shape({
		id: yup.number().moreThan(0),
	})),
	body: getSchema<ICidade>(yup.object().shape({
		name: yup.string().required().min(3),
	}))
})
);


export const UpdatedCity = async (req: Request<IparamsProps, {}, ICidade, {}>, res: Response) => {
	const data = [
		{
			id: 1,
			name: 'Luanda'
		}
	];

	return res.status(StatusCodes.ACCEPTED).json({data});

};