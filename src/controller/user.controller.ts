import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../service/user.service';

class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response, next: NextFunction) => {
    const newUser = await this.userService.create(req.body);

    if (newUser.statusCode) return next(newUser);

    return res.status(StatusCodes.CREATED).json(newUser);
  };
}

export default UserController;
