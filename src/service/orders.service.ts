import connection from '../models/connection';
import OrderModel from '../models/orders.model';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAll = async () => {
    const allProducts = await this.model.getAll();

    allProducts.forEach((order: object) => console.log(order));

    return allProducts;
  };
}

export default OrderService;
