import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const userInfo = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).greater(0).required(),
  password: Joi.string().min(8).required(),
});
  
const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = userInfo.validate(req.body);
  
  if (error) return next(error);
  
  next();
};

export default validateUser;
