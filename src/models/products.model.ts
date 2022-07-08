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

  public async getByName(name: string): Promise<IProduct> {
    const query = 'SELECT * FROM Trybesmith.Products WHERE name = ?;';

    const [result] = await this.connection.execute(query, [name]);

    const [product] = result as IProduct[];

    return product;
  }

  public async create(product: INewProduct): Promise<IProduct> {
    const { name, amount } = product;

    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const values = [name, amount];

    const [result] = await this.connection.execute<ResultSetHeader>(query, values);
    const { insertId } = result;

    const newProduct: IProduct = { id: insertId, ...product };
    return newProduct;
  }
}