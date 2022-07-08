import connection from '../models/connection';
import OrderModel from '../models/orders.model';
import ProductModel from '../models/products.model';

class OrderService {
  public orderModel: OrderModel;

  public productModel: ProductModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public getAll = async () => {
    const allOrders = await this.orderModel.getAll();
    const allProducts = await this.productModel.getAll();

    const ordersWithProductsIds: object[] = [];

    allOrders.forEach((order, index) => {
      const productsFiltered = allProducts.filter(({ orderId }) => orderId === order.id);
      const productsIds = productsFiltered.map((prod) => prod.id);

      const { id, userId } = allOrders[index];

      const orderAndProductsIds = { id, userId, productsIds };

      ordersWithProductsIds.push(orderAndProductsIds);
    });

    return ordersWithProductsIds;
  };
}

export default OrderService;
