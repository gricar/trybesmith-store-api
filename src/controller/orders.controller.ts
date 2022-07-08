import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrderService from '../service/orders.service';

class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    const allOrders = await this.orderService.getAll();

    return res.status(StatusCodes.OK).json(allOrders);
  };
}

export default OrderController;
