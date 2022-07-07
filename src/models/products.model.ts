import { Pool } from 'mysql2/promise';
import IProducts from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProducts[]> {
    const [result] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products;',
    );

    return result as IProducts[];
  }
}