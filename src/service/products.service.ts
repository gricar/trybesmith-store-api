import connection from '../models/connection';
import ProductModel from '../models/products.model';
import IProducts from '../interfaces/product.interface';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<IProducts[]> {
    const allProducts = await this.model.getAll();
    return allProducts;
  }
}

export default ProductService;
