import { Router } from 'express';
import ProductController from '../controller/products.controller';
import validateProducts from '../middlewares/validateProduct';

const products = Router();

const productController = new ProductController();

products.get('/', productController.getAll);

products.use(validateProducts);
products.post('/', productController.create);

export default products;
