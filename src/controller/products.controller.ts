import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../service/products.service';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (req: Request, res: Response) => {
    const allProducts = await this.productService.getAll();

    return res.status(StatusCodes.OK).json(allProducts);
  };
}

export default ProductController;