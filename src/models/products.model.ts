import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct, INewProduct } from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const [result] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products;',
    );

    return result as IProduct[];
  }

  public async create(product: INewProduct): Promise<IProduct> {
    const { name, amount } = product;

    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    const { insertId } = result;
    return { id: insertId, ...product };
  }
}