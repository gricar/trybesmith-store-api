import connection from '../models/connection';
import OrderModel from '../models/orders.model';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAll = async () => {
    const allProducts = await this.model.getAll();
    return allProducts;
  };
}

export default OrderService;
