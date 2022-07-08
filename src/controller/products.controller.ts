import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../service/products.service';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (req: Request, res: Response) => {
    const allProducts = await this.productService.getAll();

    return res.status(StatusCodes.OK).json(allProducts);
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    const newProduct = await this.productService.create(req.body);

    if (newProduct.statusCode) return next(newProduct);

    return res.status(StatusCodes.CREATED).json(newProduct);
  };
}

export default ProductController;