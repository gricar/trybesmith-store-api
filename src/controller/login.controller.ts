import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../service/user.service';

class LoginController {
  constructor(private userService = new UserService()) {}

  public authenticate = async (req: Request, res: Response): Promise<Response> => {
    const token = await this.userService.authenticate(req.body);

    if (!token) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Username or password invalid' });
    }

    return res.status(StatusCodes.OK).json({ token });
  };
}

export default LoginController;
