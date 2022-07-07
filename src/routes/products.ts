import { Router } from 'express';
import ProductController from '../controller/products.controller';

const products = Router();

const productController = new ProductController();

products.get('/', productController.getAll);

export default products;
