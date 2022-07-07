import connection from '../models/connection';
import ProductModel from '../models/products.model';
import { IProduct, INewProduct } from '../interfaces/product.interface';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<IProduct[]> {
    const allProducts = await this.model.getAll();
    return allProducts;
  }

  public async create(product: INewProduct): Promise<IProduct> {
    const newProduct = await this.model.create(product);

    return newProduct;
  }
}

export default ProductService;
