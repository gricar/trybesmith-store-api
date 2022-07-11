import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser, { IBaseUser } from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getUser = async (user: IBaseUser): Promise<IUser> => {
    const { username, password } = user;

    const query = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?;';

    const [result] = await this.connection.execute(query, [username, password]);

    const [userData] = result as IUser[];

    return userData;
  };

  public create = async (user: IUser): Promise<IUser> => {
    const { username, classe, level, password } = user;

    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)`;
    const values = [username, classe, level, password];

    const [result] = await this.connection.execute<ResultSetHeader>(query, values);
    const { insertId } = result;

    const newUser: IUser = { id: insertId, ...user };
    return newUser;
  };
}