import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const loginInfo = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string().min(8).required(),
});
  
const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginInfo.validate(req.body);
  
  if (error) return next(error);
  
  next();
};

export default validateLogin;
