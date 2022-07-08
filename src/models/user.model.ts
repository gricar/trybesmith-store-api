import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getByName = async (username: string): Promise<IUser> => {
    const query = 'SELECT * FROM Trybesmith.Users WHERE username = ?;';

    const [result] = await this.connection.execute(query, [username]);

    const [user] = result as IUser[];

    return user;
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