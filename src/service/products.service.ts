import { StatusCodes } from 'http-status-codes';
import connection from '../models/connection';
import ProductModel from '../models/products.model';
import { IProduct, INewProduct } from '../interfaces/product.interface';
import { Error } from '../interfaces/ErrorHandler.interface';

const productAlreadyExists: Error = {
  statusCode: StatusCodes.CONFLICT, message: 'Product already exists',
};
class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<IProduct[]> {
    const allProducts = await this.model.getAll();
    return allProducts;
  }

  public async create(product: INewProduct): Promise<IProduct | Error> {
    const existProduct = await this.model.getByName(product.name);

    if (!existProduct) {
      return this.model.create(product);
    }
    return productAlreadyExists;
  }
}

export default ProductService;
