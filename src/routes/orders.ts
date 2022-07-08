import { Router } from 'express';
import OrderController from '../controller/orders.controller';

const orders = Router();

const orderController = new OrderController();

orders.get('/', orderController.getAll);

export default orders;
