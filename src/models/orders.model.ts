import { Pool } from 'mysql2/promise';
import IOrder from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<IOrder[]> => {
    const query = 'SELECT * FROM Trybesmith.Orders;';

    const [allOrders] = await this.connection.execute(query);

    return allOrders as IOrder[];
  };
}