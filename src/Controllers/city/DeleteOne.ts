import * as yup from 'yup';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { Validation } from '../../shared';

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


	return res.status(StatusCodes.MOVED_PERMANENTLY).json({info: 'delected'});

};