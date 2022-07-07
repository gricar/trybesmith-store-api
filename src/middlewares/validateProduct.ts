import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const productInfo = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});
  
const validateProducts = (req: Request, res: Response, next: NextFunction) => {
  const { error } = productInfo.validate(req.body);
  
  if (error) return next(error);
  
  next();
};

export default validateProducts;
