import * as yup from 'yup';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Validation } from '../../shared';

export interface ICidade {
  name: string;

}

export  const createBodyValidator = Validation.Validation( (getSchema) => ({
	body: getSchema<ICidade>(yup.object().shape({
		name: yup.string().required().min(3)
	})),

}) );

export const createCity = async (req: Request<{}, {}, ICidade>, res: Response) => {


	return res.status(StatusCodes.CREATED).json({info: 1});

};