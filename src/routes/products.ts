import { Router } from 'express';
import ProductController from '../controller/products.controller';

const products = Router();

const productController = new ProductController();

products.get('/', productController.getAll);
products.post('/', productController.create);

export default products;
