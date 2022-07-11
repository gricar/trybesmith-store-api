import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../service/user.service';

class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response): Promise<Response> => {
    const token = await this.userService.create(req.body);

    if (!token) {
      return res.status(StatusCodes.CONFLICT).json({ message: 'User already exists' });
    }

    return res.status(StatusCodes.CREATED).json({ token });
  };
}

export default UserController;
