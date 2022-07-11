import { StatusCodes } from 'http-status-codes';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import IUser, { IBaseUser } from '../interfaces/user.interface';
import { Error } from '../interfaces/ErrorHandler.interface';
import generateToken from '../utils/jwt';

const userAlreadyExists: Error = {
  statusCode: StatusCodes.CONFLICT, message: 'User already exists',
};

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public getUser = (user: IBaseUser) => this.model.getUser(user);

  public create = async (user: IUser): Promise<string | Error> => {
    const existUser = await this.getUser(user);

    if (!existUser) {
      await this.model.create(user);

      return generateToken(user);
    }

    return userAlreadyExists;
  };

  public authenticate = async (user: IBaseUser): Promise<string | null> => {
    const existUser = await this.getUser(user);

    if (existUser) {
      return generateToken(user);
    }

    return null;
  };
}

export default UserService;
