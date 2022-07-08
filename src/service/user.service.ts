import { StatusCodes } from 'http-status-codes';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import IUser from '../interfaces/user.interface';
import { Error } from '../interfaces/ErrorHandler.interface';

const userAlreadyExists: Error = {
  statusCode: StatusCodes.CONFLICT, message: 'User already exists',
};

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create = async (user: IUser): Promise<IUser | Error> => {
    const existUser = await this.model.getByName(user.username);

    if (!existUser) {
      return this.model.create(user);
    }
    return userAlreadyExists;
  };
}

export default UserService;
